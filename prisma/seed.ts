import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  console.log('Seeding...');
  try {
    const user1 = await prisma.user.create({
      data: {
        account: 'wwhcer',
        firstname: 'Wang',
        lastname: 'Wenhao',
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
        role: 'USER',
        posts: {
          create: {
            title: 'Join us for Prisma Day 2019 in Berlin',
            content: 'https://www.prisma.io/day/',
            published: true,
          },
        },
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
        firstname: 'Billy',
        lastname: 'Wayne',
        role: 'ADMIN',
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
        posts: {
          create: [
            {
              title: 'Subscribe to GraphQL Weekly for community news',
              content: 'https://graphqlweekly.com/',
              published: true,
            },
            {
              title: 'Follow Prisma on Twitter',
              content: 'https://twitter.com/prisma',
              published: false,
            },
          ],
        },
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
