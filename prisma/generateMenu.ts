import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function generateMenu(superRole) {
  console.log('Seeding Menu...');
  try {
    const settingMenu = await prisma.menu.create({
      data: {
        title: '系统设置',
        key: 'setting',
      },
    });
    await prisma.menu.createMany({
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
        {
          parentId: settingMenu.id,
          title: '字典管理',
          key: 'setting/dictionary',
        },
      ],
    });

    const settingMenuList2 = await prisma.menu.findMany({
      where: {
        OR: [{ parentId: settingMenu.id }, { id: settingMenu.id }],
      },
    });

    await prisma.menusOnRoles.createMany({
      data: settingMenuList2.map((item) => ({
        menuId: item.id,
        roleId: superRole.id,
      })),
    });

    const informationMenu = await prisma.menu.create({
      data: {
        title: '信息设置',
        key: 'information',
      },
    });
    await prisma.menu.createMany({
      data: [
        {
          parentId: informationMenu.id,
          title: '客户管理',
          key: 'information/customer',
        },
        {
          parentId: informationMenu.id,
          title: '部门管理',
          key: 'information/department',
        },
        {
          parentId: informationMenu.id,
          title: '款式管理',
          key: 'information/style',
        },
      ],
    });

    const informationMenuList2 = await prisma.menu.findMany({
      where: {
        OR: [{ parentId: informationMenu.id }, { id: informationMenu.id }],
      },
    });

    await prisma.menusOnRoles.createMany({
      data: informationMenuList2.map((item) => ({
        menuId: item.id,
        roleId: superRole.id,
      })),
    });

    const orderMenu = await prisma.menu.create({
      data: {
        title: '订单',
        key: 'order',
      },
    });
    await prisma.menu.createMany({
      data: [
        {
          parentId: orderMenu.id,
          title: '排单',
          key: 'order/arrange',
        },
        {
          parentId: orderMenu.id,
          title: '订单列表',
          key: 'order/list',
        },
      ],
    });

    const orderMenuList2 = await prisma.menu.findMany({
      where: {
        OR: [{ parentId: orderMenu.id }, { id: orderMenu.id }],
      },
    });

    await prisma.menusOnRoles.createMany({
      data: orderMenuList2.map((item) => ({
        menuId: item.id,
        roleId: superRole.id,
      })),
    });
  } catch (e) {
    console.log(e);
  }
}
