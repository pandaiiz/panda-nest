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
      },
    });
    const role = await prisma.role.create({
      data: {
        title: '超级管理员',
        key: 'SUPER_ADMIN',
      },
    });
  } catch (e) {
    console.log(e);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
