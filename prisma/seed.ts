import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.menusOnRoles.deleteMany();
  await prisma.role.deleteMany();
  await prisma.menu.deleteMany();

  console.log('Seeding...');
  // 建用户，建菜单，建角色，建用户角色关系
  // 关联关系：用户-角色，角色-菜单
  try {
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

    const settingMenu = await prisma.menu.create({
      data: {
        title: '系统设置',
        key: 'setting',
      },
    });

    const menuList = await prisma.menu.createMany({
      data: [
        {
          parentId: settingMenu.id,
          title: '菜单管理',
          key: 'setting/menu',
        },
        {
          parentId: settingMenu.id,
          title: '角色管理',
          key: 'setting/role',
        },
        {
          parentId: settingMenu.id,
          title: '用户管理',
          key: 'setting/user',
        },
      ],
    });

    const menuList2 = await prisma.menu.findMany();

    await prisma.menusOnRoles.createMany({
      data: menuList2.map((item) => ({
        menuId: item.id,
        roleId: superRole.id,
      })),
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
