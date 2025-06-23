import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Fonction d'envoi d'email via Mailtrap avec les nouvelles infos
async function sendEmail(to: string, subject: string, body: string) {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,          // Tu peux aussi tester avec 2525
    auth: {
      user: '3bd16559eec872',      // Nouveau nom d'utilisateur
      pass: '859ec17a287865',      // Nouveau mot de passe
    },
    secure: false, // STARTTLS sera utilisé automatiquement si possible
  });

  await transporter.sendMail({
    from: '"StatAuto" <no-reply@statauto.dev>',
    to,
    subject,
    text: body,
  });

  console.log(`✅ Email envoyé à ${to}`);
}

async function processJobs() {
  const now = new Date();
  console.log("🕒 Heure actuelle:", now.toISOString());

  const jobs = await prisma.job.findMany({
    where: {
      status: 'scheduled',
      scheduledAt: {
        lte: now,
      },
    },
  });

  console.log(`📦 Nombre de jobs trouvés: ${jobs.length}`);

  for (const job of jobs) {
    console.log(`🚀 Traitement du job ${job.id}: ${job.name}`);

    try {
      const template = await prisma.emailTemplate.findUnique({
        where: { name: 'rapport-performance' },
      });

      if (!template) {
        console.warn('⚠️ Template email "rapport-performance" non trouvé');
        await prisma.job.update({
          where: { id: job.id },
          data: { status: 'failed', updatedAt: new Date() },
        });
        continue;
      }

      await sendEmail(
        'naomi.deeken@ynov.com',
        template.subject,
        template.body
      );

      await prisma.job.update({
        where: { id: job.id },
        data: { status: 'done', updatedAt: new Date() },
      });

      console.log(`✅ Job ${job.id} terminé avec succès.`);
    } catch (err) {
      console.error(`❌ Erreur traitement job ${job.id}:`, err);
      await prisma.job.update({
        where: { id: job.id },
        data: { status: 'failed', updatedAt: new Date() },
      });
    }
  }
}

processJobs()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
