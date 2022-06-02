/*import { PrismaClient } from '@prisma/client';
import * as seed from './index';

const prisma = new PrismaClient();

const seeds = Object.entries(seed);

(async () => {
  for (const [model, func] of seeds) {
    if (typeof func !== 'function') {
      continue;
    }

    console.info(`Seeding model '${model}'...`);

    await func(prisma);
  }
})()
  .catch((error) => {
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  */
