import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const job = await prisma.job.create({
    data: {
      name: 'Envoyer rapport performance',
      status: 'scheduled',
      scheduledAt: new Date(), // maintenant, pour traitement immédiat

    },
  });

  console.log('Job programmé:', job);
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
