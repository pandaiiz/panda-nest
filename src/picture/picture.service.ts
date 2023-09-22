import { Injectable } from '@nestjs/common';
import { PictureCreateDto } from './dto/picture-create.dto';
import * as fs from 'fs';
import { encryptFileMD5 } from '../utils/cryptogram.util';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PictureService {
  constructor(private prisma: PrismaService) {}

  async create(pictureCreateDTO: PictureCreateDto): Promise<any> {
    const { src, sign, name } = pictureCreateDTO;
    const result = await this.prisma.pictures.create({
      data: {
        src,
        sign,
        name,
      },
    });
    return {
      info: result,
    };
  }

  async getOneBySign(sign: string) {
    return this.prisma.pictures.findUnique({ where: { sign } });
  }

  async upload(file: any) {
    const { buffer, originalname } = file;

    const currentSign = encryptFileMD5(buffer);
    const hasPicture = await this.getOneBySign(currentSign);

    if (hasPicture) {
      return {
        name: originalname,
        src: hasPicture.src,
        isHas: true,
      };
    }

    const arr = file.originalname.split('.');
    const fileType = arr[arr.length - 1];
    const fileName = currentSign + '.' + fileType;

    fs.writeFileSync(`public/uploaded/${fileName}`, buffer);

    const src = `/static/uploaded/${fileName}`;

    await this.create({ src, sign: currentSign, name: originalname });

    return {
      name: originalname,
      src,
      isHas: false,
    };
  }
}
