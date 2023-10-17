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

  async getListByPaging(query: {
    pageSize?: 10;
    current?: 1;
    styleCode: any;
    tags: string;
    category: string;
    spec: string;
    tech: string;
    programmerId: string;
  }) {
    const {
      pageSize = 10,
      current = 1,
      styleCode,
      tags,
      spec,
      category,
      tech,
      programmerId,
    } = query;
    const [style, count] = await this.prisma.$transaction([
      this.prisma.style.findMany({
        skip: +pageSize * (+current - 1),
        take: +pageSize,
        include: {
          programmer: {
            select: {
              name: true,
              id: true,
            },
          },
        },
        where: {
          styleCode: { contains: styleCode },
          tags: { contains: tags },
          isDelete: 0,
          category,
          spec,
          tech,
          programmerId,
        },
      }),
      this.prisma.style.count({
        where: {
          styleCode: { contains: styleCode },
          tags: { contains: tags },
          isDelete: 0,
        },
      }),
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
  findListByBaseCode(baseStyleCode: string) {
    return this.prisma.style.findMany({ where: { baseStyleCode } });
  }

  update(id: string, updateSpecificationDto: any) {
    return this.prisma.style.update({
      where: { id },
      data: updateSpecificationDto,
    });
  }

  remove(id: string) {
    return this.prisma.style.update({ where: { id }, data: { isDelete: 1 } });
  }
}
