import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SpecificationsService {
  constructor(private prisma: PrismaService) {}
  create(createSpecificationDto: any) {
    return this.prisma.specifications.create({
      data: createSpecificationDto,
    });
  }

  findAll() {
    return `This action returns all specifications`;
  }

  async getSpecificationsByPaging(query: {
    pageSize?: 10;
    current?: 1;
    styleNumber: any;
  }) {
    const { pageSize = 10, current = 1, styleNumber } = query;
    const [specifications, count] = await this.prisma.$transaction([
      this.prisma.specifications.findMany({
        where: {
          styleNumber: {
            contains: styleNumber,
          },
        },
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

  findOne(id: number) {
    return `This action returns a #${id} specification`;
  }

  update(id: string, updateSpecificationDto: any) {
    return this.prisma.specifications.update({
      where: { id },
      data: updateSpecificationDto,
    });
  }

  remove(id: string) {
    return this.prisma.specifications.delete({ where: { id } });
  }
}
