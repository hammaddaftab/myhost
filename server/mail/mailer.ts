import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD?.replace(/\s+/g, '')
  }
});

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendMail({ to, subject, html }: SendMailOptions) {
  return transporter.sendMail({
    from: `"MyHost" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
}
