import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) { }
  create(createTransferDto: CreateTransferDto) {
    return 'This action adds a new transfer';
  }
  createTransferItem(createTransferItemDto: any) {
    return this.prisma.transferItem.create({ data: createTransferItemDto });
  }
  async batchCreate(createTransferDto: any) {
    const { orderDetails, transfers } = createTransferDto;
    const orderDetailsIds = orderDetails.map((item) => item.id);
    try {
      const updateDetailsStatus = this.prisma.orderDetail.updateMany({
        where: {
          id: {
            in: orderDetailsIds,
          },
        },
        data: {
          status: 1,
        },
      });

      const createTransfers = this.prisma.transfer.createMany({
        data: transfers,
      });
      return this.prisma.$transaction([updateDetailsStatus, createTransfers]);
    } catch (e) {
      return { success: false };
    }
  }
  async getDetailsListByPaging(query: { pageSize?: 10; current?: 1 }) {
    const { pageSize = 10, current = 1 } = query;
    const [orderDetails, count] = await this.prisma.$transaction([
      this.prisma.transferItem.findMany({
        include: {
          department: true, transfer: {
            include: { style: true }
          }
        },
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.transferItem.count(),
    ]);
    return {
      data: orderDetails,
      pagination: {
        total: count,
      },
    };
  }
  async getListByPaging(query: {
    pageSize?: 10;
    current?: 1;
    status: number;
    id: number;
  }) {
    const { pageSize = 10, current = 1, status, id } = query;
    const [orders, count] = await this.prisma.$transaction([
      this.prisma.transfer.findMany({
        where: {
          status: status && +status,
          id: id && +id,
        },
        include: { order: { include: { customer: true } }, style: true },
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.transfer.count({
        where: {
          status: status && +status,
          id: id && +id,
        },
      }),
    ]);
    return {
      data: orders,
      pagination: {
        total: count,
      },
    };
  }
  findAll() {
    return `This action returns all transfer`;
  }

  findOne(id: string) {
    return this.prisma.transferItem.findUnique({ where: { id } });
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return this.prisma.transfer.update({
      where: { id },
      data: updateTransferDto,
    });
  }
  batchPrintPatch(updateTransferDto: any) {
    return this.prisma.transfer.updateMany({
      where: {
        id: {
          in: updateTransferDto,
        },
      },
      data: {
        status: 1,
      },
    });
  }

  remove(id: string) {
    return this.prisma.transferItem.delete({ where: { id } })
  }
  removeItem(id: string) {
    return this.prisma.transferItem.delete({ where: { id } })
  }
  getLastTransferDetailByTransferId(id: number) {
    return this.prisma.transferItem.findMany({
      where: {
        transferId: id
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 1
    })
  }
}
