import { EmailService } from '../src/email.service'; // adapte le chemin si besoin
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const emailService = new EmailService();

  try {
    await emailService.sendEmail(
      'naomi.deeken@ynov.com',      // Mets ici ton email de test
      'Test envoi réel',
      'notificationCourse',        // Template si tu en utilises un
      { courseName: 'Test réel' }  // Données du template
    );
    console.log('Email envoyé avec succès !');
  } catch (error) {
    console.error('Erreur lors de l’envoi :', error);
  }
}

main();
