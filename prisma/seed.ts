import { PrismaClient } from '@prisma/client';
import { generateMenu } from './generateMenu';

const prisma = new PrismaClient();

async function main() {
  await prisma.dictionary.deleteMany();
  await prisma.user.deleteMany();
  await prisma.menusOnRoles.deleteMany();
  await prisma.role.deleteMany();
  await prisma.menu.deleteMany();

  console.log('Seeding...');
  // 建用户，建菜单，建角色，建用户角色关系
  // 关联关系：用户-角色，角色-菜单
  try {
    const dictionary = await prisma.dictionary.createMany({
      data: [
        {
          title: '件重',
          key: 'SINGLE_WEIGHRT',
        },
        {
          title: '品名',
          key: 'CATEGORY',
        },
        {
          title: '圈号',
          key: 'CIRCLE',
        },
      ],
    });
    const superRole = await prisma.role.create({
      data: {
        title: '超级管理员',
        key: 'SUPER_ADMIN',
      },
    });
    const superUser = await prisma.user.create({
      data: {
        account: 'wwhcer',
        name: 'Wenhao',
        roleId: superRole.id,
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      },
    });

    await generateMenu(superRole);
  } catch (e) {
    console.log(e);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
