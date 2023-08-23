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
    const settingMenuList = await prisma.menu.createMany({
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
    const informationMenuList = await prisma.menu.createMany({
      data: [
        {
          parentId: informationMenu.id,
          title: '客户管理',
          key: 'setting/customer',
        },
        {
          parentId: informationMenu.id,
          title: '员工管理',
          key: 'setting/employee',
        },
        {
          parentId: informationMenu.id,
          title: '款式管理',
          key: 'setting/specifications',
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
    const orderMenuList = await prisma.menu.createMany({
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
