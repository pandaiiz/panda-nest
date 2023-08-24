import { PrismaClient } from '@prisma/client';
import { generateMenu } from './generateMenu';

const prisma = new PrismaClient();

async function main() {
  await prisma.dictionary.deleteMany();
  await prisma.dictionaryItem.deleteMany();
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

    const dictionaryList = await prisma.dictionary.findMany({
      where: {
        OR: [{ key: 'SINGLE_WEIGHRT' }, { key: 'CATEGORY' }, { key: 'CIRCLE' }],
      },
    });

    const dictionaryItemList = [];
    dictionaryList.forEach((item) => {
      if (item.key === 'SINGLE_WEIGHRT') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            itemKey: 'sw_12',
            title: '单重12',
          },
          {
            dictId: item.id,
            itemKey: 'sw_14',
            title: '单重14',
          },
          {
            dictId: item.id,
            itemKey: 'sw_16',
            title: '单重16',
          },
        );
      }
      if (item.key === 'CATEGORY') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            itemKey: '4n_z',
            title: '4N直',
          },
          {
            dictId: item.id,
            itemKey: '5n_f',
            title: '5N方',
          },
          {
            dictId: item.id,
            itemKey: '6n_y',
            title: '6N圆',
          },
        );
      }
      if (item.key === 'CIRCLE') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            itemKey: 'qh_16',
            title: '圈号16',
          },
          {
            dictId: item.id,
            itemKey: 'qh_12',
            title: '圈号12',
          },
          {
            dictId: item.id,
            itemKey: 'qh_14',
            title: '圈号14',
          },
        );
      }
    });

    await prisma.dictionaryItem.createMany({ data: dictionaryItemList });

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
