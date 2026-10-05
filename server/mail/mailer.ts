import nodemailer from 'nodemailer';
import { logger } from '../utils/logger';

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
  if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
    logger.warn('Email skipped: MAIL_USER or MAIL_APP_PASSWORD is not configured in environment variables.');
    return null;
  }

  logger.info(`Sending email to <${to}>: "${subject}"`);
  try {
    const info = await transporter.sendMail({
      from: `"MyHost" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html
    });
    logger.info(`Email successfully sent to <${to}> (messageId: ${info.messageId})`);
    return info;
  } catch (error) {
    logger.error(`Failed to send email to <${to}>:`, error);
    throw error;
  }
}

