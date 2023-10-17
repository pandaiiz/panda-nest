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
      await this.prisma.order.create({
        data: {
          ...orderData,
          orderDetails: {
            createMany: { data: orderDetailData },
          },
        },
      });
      return { success: true, msg: '创建成功！' };
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const { orderData, orderDetailData } = updateOrderDto;
      const updateOrder = this.prisma.order.update({
        where: {
          id,
        },
        data: orderData,
      });

      const deleteOrderDetails = this.prisma.orderDetail.deleteMany({
        where: {
          orderId: id,
        },
      });
      const insertOrderDetails = this.prisma.orderDetail.createMany({
        data: orderDetailData,
      });
      const res = await this.prisma.$transaction([
        updateOrder,
        deleteOrderDetails,
        insertOrderDetails,
      ]);
      return { success: true, msg: '更新成功！', res };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        msg: '更新失败！',
        result: error,
      };
    }
  }

  findOrderDetailsById(id: string) {
    return this.prisma.orderDetail.findMany({
      where: { orderId: id },
      include: {
        style: true,
      },
    });
  }
  findAll() {
    return this.prisma.order.findMany();
  }
  findAllOrderDetails(params: {
    status: any;
    category: any;
    orderNumber: any;
  }) {
    const { status, category, orderNumber } = params;
    return this.prisma.orderDetail.findMany({
      where: {
        status: status ? +status : undefined,
        category,
        order: {
          orderNumber: {
            contains: orderNumber,
          },
        },
      },
      include: {
        order: {
          include: { customer: true },
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
  async copyOrderById(id: string) {
    const oldOrder = await this.prisma.order.findUnique({
      where: { id },
      include: {
        orderDetails: true,
        customer: true,
      },
    });

    const orderData = {
      customerId: oldOrder.customer.id,
      fontPrint: oldOrder.fontPrint,
      fontPrintName: oldOrder.fontPrintName,
      orderDate: oldOrder.orderDate,
      orderNumber: oldOrder.orderNumber + `-1`,
      remark: oldOrder.remark,
    };

    const orderDetailData = oldOrder.orderDetails.map((item) => ({
      category: item.category,
      categoryName: item.categoryName,
      circle: item.circle,
      imgSrc: item.imgSrc,
      quantity: item.quantity,
      singleWeight: item.singleWeight,
    }));

    try {
      await this.prisma.order.create({
        data: {
          ...orderData,
          orderDetails: {
            createMany: { data: orderDetailData },
          },
        },
      });
      return { success: true, msg: '创建成功！' };
    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: string) {
    const deleteOrderDetails = this.prisma.orderDetail.deleteMany({
      where: { orderId: id },
    });
    const deleteOrder = this.prisma.order.delete({ where: { id } });
    return this.prisma.$transaction([deleteOrderDetails, deleteOrder]);
  }
  removeItem(id: string) {
    return this.prisma.orderDetail.delete({ where: { id } });
  }
}
