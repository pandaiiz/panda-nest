import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  console.log('Seeding...');
  try {
    const user1 = await prisma.user.create({
      data: {
        account: 'wwhcer',
        name: 'Wenhao',
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
        roleId: 'USER',
      },
    });
    console.log(user1);
  } catch (e) {
    console.log(e);
  }
  try {
    const user2 = await prisma.user.create({
      data: {
        account: 'billy',
        name: 'Billy',
        roleId: 'ADMIN',
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      },
    });
    console.log(user2);
  } catch (e) {
    console.log(e);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
