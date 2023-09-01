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
  findAllOrderDetails(query) {
    return this.prisma.orderDetail.findMany({
      include: {
        order: {
          include: {
            customer: true,
          },
        },
      },
    });
  }
  async getListByPaging(query: { pageSize?: 10; current?: 1 }) {
    const { pageSize = 10, current = 1 } = query;
    const [orders, count] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
        include: {
          orderDetails: true,
          customer: true,
        },
      }),
      this.prisma.order.count(),
    ]);
    return {
      data: orders,
      pagination: {
        total: count,
      },
    };
  }
  findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    const { formData, detailData } = updateOrderDto;
    const existId = detailData
      .filter((detail) => detail.id)
      .map((detail) => detail.id);
    return this.prisma.order.update({
      where: { id },
      data: {
        ...formData,
        orderDetails: {
          deleteMany: { id: { in: existId } },
          createMany: { data: detailData },
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
  removeItem(id: string) {
    return this.prisma.orderDetail.delete({ where: { id } });
  }
}
