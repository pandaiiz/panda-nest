import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      const { orderData, orderDetailData } = createOrderDto;

      const customer = await this.prisma.customer.findUnique({
        where: { id: orderData.customerId },
      });
      orderData.customerCode = customer.customerCode;
      orderData.customerName = customer.name;

      const createOrder = await this.prisma.order.create({ data: orderData });

      orderDetailData?.forEach((item) => {
        item.orderId = createOrder.id;
        item.customerId = customer.id;
        item.customerCode = customer.customerCode;
        item.customerName = customer.name;
      });
      await this.prisma.orderDetail.createMany({
        data: orderDetailData,
      });
      return { success: true, msg: '创建成功！' };
    } catch (error) {
      return { success: false, msg: '创建失败！', result: error };
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const { orderData, orderDetailData } = updateOrderDto;

      const customer = await this.prisma.customer.findUnique({
        where: { id: orderData.customerId },
      });
      orderData.customerCode = customer.customerCode;
      orderData.customerName = customer.name;

      const createOrder = await this.prisma.order.update({
        where: {
          id,
        },
        data: orderData,
      });

      const transaction = orderDetailData.map((item) => {
        item.orderId = createOrder.id;
        item.customerId = customer.id;
        item.customerCode = customer.customerCode;
        item.customerName = customer.name;
        if (item.id) {
          return this.prisma.orderDetail.update({
            where: { id: item.id },
            data: item,
          });
        } else {
          return this.prisma.orderDetail.create({
            data: item,
          });
        }
      });
      await this.prisma.$transaction(transaction);
      return { success: true, msg: '更新成功！' };
    } catch (error) {
      return {
        success: false,
        msg: '更新失败！',
        result: error,
      };
    }
  }

  findOrderDetailsById(id: string) {
    return this.prisma.orderDetail.findMany({ where: { orderId: id } });
  }
  findAll() {
    return this.prisma.order.findMany();
  }
  findAllOrderDetails() {
    return this.prisma.orderDetail.findMany();
  }
  async getListByPaging(query: { pageSize?: 10; current?: 1 }) {
    const { pageSize = 10, current = 1 } = query;
    const [orders, count] = await this.prisma.$transaction([
      this.prisma.order.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
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

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
  removeItem(id: string) {
    return this.prisma.orderDetail.delete({ where: { id } });
  }
}
