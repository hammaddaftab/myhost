import { Booking } from '../../db/entities/Booking.entity';

export function ownerNotifyHtml(booking: Booking): string {
  const fields: { label: string; value: string | undefined | null }[] = [
    { label: 'Booking ID', value: booking.id },
    { label: 'Submission Type', value: booking.type === 'calendar' ? 'Calendar Consultation' : 'Direct Inquiry' },
    { label: 'Full Name', value: booking.name },
    { label: 'Email Address', value: booking.email },
    { label: 'Phone / WhatsApp', value: booking.phone },
    { label: 'Listing URL', value: booking.listingUrl },
    { label: 'Number of Properties', value: booking.propertiesCount },
    ...(booking.type === 'calendar'
      ? [
          { label: 'Selected Date', value: booking.selectedDate },
          { label: 'Selected Time', value: booking.selectedTime },
          { label: 'Consultation Focus', value: booking.consultationFocus },
        ]
      : [
          { label: 'Message / Notes', value: booking.message },
        ]),
    {
      label: 'Submitted At',
      value: booking.createdAt ? new Date(booking.createdAt).toISOString() : new Date().toISOString()
    }
  ];

  const tableRows = fields
    .filter(f => f.value !== null && f.value !== undefined && f.value !== '')
    .map(
      f => `
      <tr>
        <td style="padding: 10px 14px; border: 1px solid #e5e7eb; font-weight: 600; background-color: #f9fafb; width: 35%; color: #374151;">${f.label}</td>
        <td style="padding: 10px 14px; border: 1px solid #e5e7eb; color: #111827; word-break: break-all;">${f.value}</td>
      </tr>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Booking Notification</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 24px; color: #111827;">
  <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 32px;">
    <h2 style="margin-top: 0; color: #111827; font-size: 22px;">
      🔔 New Lead: ${booking.type === 'calendar' ? 'Calendar Booking' : 'Direct Inquiry'}
    </h2>
    <p style="font-size: 14px; color: #4b5563;">
      A new submission was received on the MyHost platform. Here are the details:
    </p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
      <tbody>
        ${tableRows}
      </tbody>
    </table>
    <p style="font-size: 12px; color: #9ca3af; margin-top: 24px; margin-bottom: 0;">
      Automated digest from MyHost API
    </p>
  </div>
</body>
</html>
  `.trim();
}
