import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  create(createMenuDto: CreateMenuDto) {
    return this.prisma.menu.create({ data: { ...createMenuDto } });
  }

  findAll() {
    return this.prisma.menu.findMany({ include: { roles: true } });
  }

  findOne(id: string) {
    return this.prisma.menu.findUnique({ where: { id } });
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.prisma.role.update({
      data: { ...updateMenuDto },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}
