import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  create(createRoleDto: CreateRoleDto) {
    const { title, key } = createRoleDto;
    return this.prisma.role.create({
      data: {
        key,
        title,
      },
    });
  }

  findAll() {
    return this.prisma.role.findMany({
      include: {
        menus: {
          where: {
            menu: {
              enabled: true,
            },
          },
          include: {
            menu: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.role.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    await this.prisma.menusOnRoles.deleteMany({ where: { roleId: id } });
    const { menus } = updateRoleDto;
    return this.prisma.role.update({
      data: {
        menus: {
          create: menus.map((item) => ({
            menuId: item,
          })),
        },
      },
      where: { id },
    });
  }

  async remove(id: string) {
    try {
      const res = await this.prisma.role.delete({ where: { id } });
    } catch (e) {
      console.log(e);
    }
    return {};
  }
}
