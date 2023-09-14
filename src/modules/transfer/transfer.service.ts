import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransferService {
  constructor(private prisma: PrismaService) {}
  create(createTransferDto: CreateTransferDto) {
    return 'This action adds a new transfer';
  }
  async batchCreate(createTransferDto: any) {
    const data = createTransferDto.map((item) => ({
      orderId: item.orderId,
      customerCode: item.customerCode,
      customerName: item.customerName,
      categoryId: item.categoryId,
      categoryTitle: item.categoryTitle,
      circle: item.circle,
      singleWeight: item.singleWeight,
      styleCode: item.styleCode,
      remark: item.remark,
    }));
    try {
      await this.prisma.transfer.createMany({ data });
      return { success: true };
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }
  async getListByPaging(query: { pageSize?: 10; current?: 1 }) {
    const { pageSize = 10, current = 1 } = query;
    const [orders, count] = await this.prisma.$transaction([
      this.prisma.transfer.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.transfer.count(),
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

  findOne(id: number) {
    return `This action returns a #${id} transfer`;
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return `This action updates a #${id} transfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} transfer`;
  }
}
