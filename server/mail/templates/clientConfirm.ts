import { Booking } from '../../db/entities/Booking.entity';

export function clientConfirmHtml(booking: Booking): string {
  const contactEmail = process.env.OWNER_EMAIL || 'hammaddaftab@gmail.com';
  if (booking.type === 'calendar') {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Consultation Confirmed</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 24px; color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 32px;">
    <h2 style="margin-top: 0; color: #047857; font-size: 24px;">Your MyHost Consultation is Confirmed!</h2>
    <p style="font-size: 16px; line-height: 24px;">Hi ${booking.name},</p>
    <p style="font-size: 15px; line-height: 22px; color: #374151;">
      We're excited to connect with you. We've reserved your 15-minute listing audit and strategy session:
    </p>
    <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px 20px; margin: 20px 0;">
      <p style="margin: 6px 0;"><strong>Date:</strong> ${booking.selectedDate || 'N/A'}</p>
      <p style="margin: 6px 0;"><strong>Time:</strong> ${booking.selectedTime || 'N/A'}</p>
      <p style="margin: 6px 0;"><strong>Focus:</strong> ${booking.consultationFocus || 'Comprehensive Revenue & Listing Audit'}</p>
      <p style="margin: 6px 0;"><strong>Session Format:</strong> Hosted via Google Meet or Phone (15 Minutes)</p>
      <p style="margin: 6px 0;"><strong>Status:</strong> Free-First-5 Stays Reserved</p>
    </div>
    <p style="font-size: 14px; line-height: 20px; color: #4b5563;">
      During this call, we will review your short-term rental performance, explore listing optimization opportunities, and confirm your eligibility for our Free-First-5 stays co-hosting offer.
    </p>
    <p style="font-size: 14px; line-height: 20px; color: #4b5563;">
      If you have questions or need to reschedule, simply reply to this email or contact us at <a href="mailto:${contactEmail}" style="color: #047857; text-decoration: none;">${contactEmail}</a>.
    </p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
    <p style="font-size: 12px; color: #9ca3af; margin-bottom: 0;">
      MyHost Co-Hosting Platform • ${contactEmail}
    </p>
  </div>
</body>
</html>
    `.trim();
  }

  // Inquiry confirmation email
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inquiry Received</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 24px; color: #111827;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 32px;">
    <h2 style="margin-top: 0; color: #047857; font-size: 24px;">We Received Your Message — MyHost</h2>
    <p style="font-size: 16px; line-height: 24px;">Hi ${booking.name},</p>
    <p style="font-size: 15px; line-height: 22px; color: #374151;">
      Thank you for reaching out to MyHost. Our on-duty short-term rental strategist has received your inquiry and is reviewing the details.
    </p>
    <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px; padding: 12px 16px; margin: 20px 0;">
      <p style="margin: 0; font-size: 14px; color: #065f46; font-weight: 500;">
        ⚡ Average response time is under 5 minutes during operational hours.
      </p>
    </div>
    <p style="font-size: 14px; line-height: 20px; color: #4b5563;">
      We'll follow up shortly via email or phone. If you have any additional details to add in the meantime, feel free to reply directly to this email or reach us at <a href="mailto:${contactEmail}" style="color: #047857; text-decoration: none;">${contactEmail}</a>.
    </p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
    <p style="font-size: 12px; color: #9ca3af; margin-bottom: 0;">
      MyHost Co-Hosting Platform • ${contactEmail}
    </p>
  </div>
</body>
</html>
  `.trim();
}
