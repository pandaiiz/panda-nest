import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BaseService {
  modelName: string;
  constructor(modelName, readonly prisma: PrismaService) {
    this.modelName = modelName;
  }
  create(data: any) {
    return this.prisma[this.modelName].create({
      data,
    });
  }

  findAll() {
    return this.prisma[this.modelName].findMany();
  }

  async getListByPaging(query: any) {
    const { pageSize = 10, current = 1 } = query;
    const [specifications, count] = await this.prisma.$transaction([
      this.prisma[this.modelName].findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma[this.modelName].count(),
    ]);
    return {
      data: specifications,
      pagination: {
        total: count,
      },
    };
  }

  findOne(id: string) {
    return this.prisma[this.modelName].findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma[this.modelName].update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma[this.modelName].delete({ where: { id } });
  }
}
