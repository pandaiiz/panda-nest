import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StyleService {
  constructor(private prisma: PrismaService) {}
  create(createSpecificationDto: any) {
    return this.prisma.style.create({
      data: createSpecificationDto,
    });
  }

  findAll() {
    return `This action returns all style`;
  }

  async getListByPaging(query: { pageSize?: 10; current?: 1; styleCode: any }) {
    const { pageSize = 10, current = 1 } = query;
    const [style, count] = await this.prisma.$transaction([
      this.prisma.style.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.style.count(),
    ]);
    return {
      data: style,
      pagination: {
        total: count,
      },
    };
  }

  findOne(id: string) {
    return this.prisma.style.findUnique({ where: { id } });
  }
  findOneByCode(styleCode: string) {
    return this.prisma.style.findMany({ where: { styleCode } });
  }

  update(id: string, updateSpecificationDto: any) {
    return this.prisma.style.update({
      where: { id },
      data: updateSpecificationDto,
    });
  }

  remove(id: string) {
    return this.prisma.style.delete({ where: { id } });
  }
}
