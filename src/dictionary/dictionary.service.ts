import { Injectable } from '@nestjs/common';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DictionaryService {
  constructor(private prisma: PrismaService) {}
  create(createDictionaryDto: any) {
    return this.prisma.dictionary.create({
      data: createDictionaryDto,
    });
  }
  createItem(createDictionaryItemDto: any) {
    return this.prisma.dictionaryItem.create({
      data: createDictionaryItemDto,
    });
  }

  findAll() {
    return this.prisma.dictionary.findMany({
      include: {
        dictItems: true,
      },
    });
  }

  findOne(dictId: string) {
    return this.prisma.dictionary.findUnique({
      where: { id: dictId },
    });
  }
  async findDictItemByDictId(dictId: string) {
    const dict = await this.prisma.dictionary.findFirst({
      where: {
        id: dictId,
      },
      include: {
        dictItems: true,
      },
    });
    return dict?.dictItems || [];
  }
  async findOneByKey(key: string) {
    const dict = await this.prisma.dictionary.findFirst({
      where: {
        key,
        enabled: 1,
      },
      include: {
        dictItems: {
          where: {
            enabled: 1,
          },
        },
      },
    });
    return dict?.dictItems || [];
  }

  update(id: string, updateDictionaryDto: any) {
    console.log(updateDictionaryDto);
    return this.prisma.dictionary.update({
      where: { id },
      data: updateDictionaryDto,
    });
  }
  updateItem(id: string, updateDictionaryItemDto: any) {
    console.log(updateDictionaryItemDto);
    return this.prisma.dictionaryItem.update({
      where: { id },
      data: updateDictionaryItemDto,
    });
  }

  remove(id: string) {
    return this.prisma.dictionary.delete({ where: { id } });
  }
  removeItem(id: string) {
    return this.prisma.dictionaryItem.delete({ where: { id } });
  }
}
