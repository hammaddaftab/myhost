import { Router, Request, Response } from 'express';
import { AppDataSource } from '../db/data-source';
import { Booking } from '../db/entities/Booking.entity';
import { sendMail } from '../mail/mailer';
import { clientConfirmHtml } from '../mail/templates/clientConfirm';
import { ownerNotifyHtml } from '../mail/templates/ownerNotify';

export const bookingRouter = Router();

bookingRouter.get('/health', (_req: Request, res: Response): void => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

bookingRouter.post('/booking', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      type,
      name,
      email,
      phone,
      listingUrl,
      propertiesCount,
      consultationFocus,
      selectedDate,
      selectedTime,
      message,
      metadata
    } = req.body;

    // 1. Validate
    if (!name || typeof name !== 'string' || !name.trim()) {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    if (type !== 'calendar' && type !== 'inquiry') {
      res.status(400).json({ error: 'Invalid booking type. Must be "calendar" or "inquiry"' });
      return;
    }

    // 2. Save to DB
    const bookingRepo = AppDataSource.getRepository(Booking);
    const booking = bookingRepo.create({
      type,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : null,
      listingUrl: listingUrl ? String(listingUrl).trim() : null,
      propertiesCount: propertiesCount ? String(propertiesCount).trim() : null,
      consultationFocus: consultationFocus ? String(consultationFocus).trim() : null,
      selectedDate: selectedDate ? String(selectedDate).trim() : null,
      selectedTime: selectedTime ? String(selectedTime).trim() : null,
      message: message ? String(message).trim() : null,
      metadata: metadata || {}
    });

    const savedBooking = await bookingRepo.save(booking);

    // 3. Send client email (safely wrapped in try/catch)
    try {
      const clientSubject =
        savedBooking.type === 'calendar'
          ? 'Your MyHost Consultation is Confirmed ✓'
          : 'We received your message — MyHost';

      await sendMail({
        to: savedBooking.email,
        subject: clientSubject,
        html: clientConfirmHtml(savedBooking)
      });
    } catch (mailError) {
      console.error('Failed to send client confirmation email:', mailError);
    }

    // 4. Send owner email (safely wrapped in try/catch)
    const ownerEmail = process.env.OWNER_EMAIL;
    if (ownerEmail) {
      try {
        const ownerSubject = `[MyHost] New ${
          savedBooking.type === 'calendar' ? 'Booking' : 'Inquiry'
        } — ${savedBooking.name}`;

        await sendMail({
          to: ownerEmail,
          subject: ownerSubject,
          html: ownerNotifyHtml(savedBooking)
        });
      } catch (mailError) {
        console.error('Failed to send owner notification email:', mailError);
      }
    } else {
      console.warn('OWNER_EMAIL is not configured; skipping owner notification.');
    }

    // 5. Respond
    res.status(200).json({
      success: true,
      bookingId: savedBooking.id
    });
  } catch (error) {
    console.error('Error processing booking request:', error);
    res.status(500).json({ error: 'Internal server error processing booking' });
  }
});
