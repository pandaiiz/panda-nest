import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customer.create({ data: createCustomerDto });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  async getListByPaging(query: {
    pageSize?: 10;
    current?: 1;
    name: any;
    customerCode: any;
  }) {
    const { pageSize = 10, current = 1, name, customerCode } = query;
    const [employees, count] = await this.prisma.$transaction([
      this.prisma.customer.findMany({
        where: {
          name: {
            contains: name,
          },
          customerCode: {
            contains: customerCode,
          },
        },
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.customer.count(),
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

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
