import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  create(createOrderDto: any) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll() {
    return this.prisma.order.findMany();
  }
  async getListByPaging(query: { pageSize?: 10; current?: 1 }) {
    const { pageSize = 10, current = 1 } = query;
    const [specifications, count] = await this.prisma.$transaction([
      this.prisma.specifications.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.specifications.count(),
    ]);
    return {
      data: specifications,
      pagination: {
        total: count,
      },
    };
  }
  findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data: updateOrderDto });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}
