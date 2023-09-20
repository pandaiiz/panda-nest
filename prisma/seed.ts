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
    await prisma.dictionary.createMany({
      data: [
        {
          title: '品名',
          key: 'CATEGORY',
        },
        {
          title: '收发产品类型',
          key: 'PRODUCT_TYPE',
        },
        {
          title: '字印',
          key: 'FONT_PRINT',
        },
      ],
    });

    const dictionaryList = await prisma.dictionary.findMany({
      where: {
        OR: [
          { key: 'CATEGORY' },
          { key: 'PRODUCT_TYPE' },
          { key: 'FONT_PRINT' },
        ],
      },
    });

    const dictionaryItemList = [];
    dictionaryList.forEach((item) => {
      if (item.key === 'PRODUCT_TYPE') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            key: 'BCP',
            title: '半成品',
          },
          {
            dictId: item.id,
            key: 'LP',
            title: '良品',
          },
          {
            dictId: item.id,
            key: 'BLP',
            title: '不良品',
          },
        );
      }
      if (item.key === 'FONT_PRINT') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            key: '999J',
            title: '999金',
          },
          {
            dictId: item.id,
            key: '999Y',
            title: '999银',
          },
          {
            dictId: item.id,
            key: 'BK',
            title: '补口',
          },
        );
      }
      if (item.key === 'CATEGORY') {
        dictionaryItemList.push(
          {
            dictId: item.id,
            key: '5NHMTL',
            title: '5N弧面推拉',
          },
          {
            dictId: item.id,
            key: '5NTXTL',
            title: '5N梯形推拉',
          },
          {
            dictId: item.id,
            key: '5NPMTL',
            title: '5N平面推拉',
          },
          {
            dictId: item.id,
            key: 'KZ',
            title: '扣子',
          },
          {
            dictId: item.id,
            key: '4NPMGK',
            title: '4N平面固口',
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
