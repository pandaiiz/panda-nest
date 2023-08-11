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
    return this.prisma.role.findMany({ include: { menus: true } });
  }

  findOne(id: string) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.prisma.role.update({
      data: { ...updateRoleDto },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}
