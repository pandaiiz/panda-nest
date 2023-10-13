import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'nestjs-prisma';
import { formatToTree } from '../utils';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  create(createMenuDto: CreateMenuDto) {
    return this.prisma.menu.create({ data: { ...createMenuDto } });
  }

  async findAll() {
    const menuList = await this.prisma.menu.findMany({
      orderBy: { sort: 'asc' },
    });
    return formatToTree(menuList);
  }

  findOne(id: string) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.prisma.menu.update({
      data: { ...updateMenuDto },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.menu.delete({ where: { id } });
  }
}
