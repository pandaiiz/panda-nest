import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({ data: createDepartmentDto });
  }

  findAll() {
    return this.prisma.department.findMany();
  }

  async getListByPaging(query: {
    pageSize?: 10;
    current?: 1;
    name: string;
    code: string;
  }) {
    const { pageSize = 10, current = 1, name, code } = query;
    const [data, count] = await this.prisma.$transaction([
      this.prisma.department.findMany({
        where: {
          name: {
            contains: name,
          },
          code: {
            contains: code,
          },
        },
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.department.count(),
    ]);
    return {
      data,
      pagination: {
        total: count,
      },
    };
  }
  findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  remove(id: string) {
    return this.prisma.department.delete({ where: { id } });
  }
}
