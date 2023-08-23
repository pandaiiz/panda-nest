import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({ data: createEmployeeDto });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  async getListByPaging(query: { pageSize?: 10; current?: 1; name: any }) {
    const { pageSize = 10, current = 1, name } = query;
    const [employees, count] = await this.prisma.$transaction([
      this.prisma.employee.findMany({
        where: {
          name: {
            contains: name,
          },
        },
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.employee.count(),
    ]);
    return {
      data: employees,
      pagination: {
        total: count,
      },
    };
  }
  findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  remove(id: string) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
