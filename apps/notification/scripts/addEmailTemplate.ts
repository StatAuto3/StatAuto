import { PrismaClient } from '@prisma/client';
/// <reference types="node" />

const prisma = new PrismaClient();

async function main() {
  const template = await prisma.emailTemplate.upsert({
    where: { name: 'rapport-performance' },
    update: {},
    create: {
      name: 'rapport-performance',
      subject: 'Rapport de performance hebdomadaire',
      body: 'Bonjour, voici le rapport de performance...',
    },
  });

  console.log('Template ajouté ou mis à jour:', template);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
