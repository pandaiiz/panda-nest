import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  create(createRoleDto: CreateRoleDto) {
    const { name } = createRoleDto;
    return this.prisma.role.create({ data: { name } });
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: string) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const { menus } = updateRoleDto;
    return this.prisma.role.update({
      data: {
        menus: JSON.stringify(menus),
      },
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}
