import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()


export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, template: string, context: any): Promise<boolean> {
    const mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@default.com',
      to,
      subject,
      text: `La course ${context.courseName} commence bientôt !`, // ou html selon ta logique
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`Email envoyé : ${info.messageId}`);
      return true;
    } catch (error) {
      console.error('Erreur envoi email :', error);
      return false;
    }
  }
}
