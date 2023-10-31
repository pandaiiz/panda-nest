import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { encryptFileMD5 } from '../utils/cryptogram.util';
import fs from 'fs';
import { toUtf8 } from '../utils';
import { exportImageFromExcel } from '../utils/exportImageFromExcel';

@Injectable()
export class UploadService {
  constructor(private prisma: PrismaService) {}

  async create(pictureCreateDTO: any): Promise<any> {
    const { src, sign, name, parentId, type } = pictureCreateDTO;
    const result = await this.prisma.uploads.create({
      data: {
        src,
        sign,
        name,
        parentId,
        type,
      },
    });
    return {
      info: result,
    };
  }

  async getOneBySign(sign: string) {
    return this.prisma.uploads.findUnique({ where: { sign } });
  }

  async upload(file: any, type: string) {
    const { buffer, originalname } = file;

    const currentSign = encryptFileMD5(buffer);
    const hasFile = await this.getOneBySign(currentSign);

    if (hasFile) {
      return {
        name: toUtf8(originalname),
        src: hasFile.src,
        isHas: true,
      };
    }
    const arr = toUtf8(originalname).split('.');
    const fileType = arr[arr.length - 1];
    const fileName = currentSign + '.' + fileType;
    fs.writeFileSync(`public/uploaded/${type || 'image'}/${fileName}`, buffer);
    const src = `/static/uploaded/${type || 'image'}/${fileName}`;
    await this.create({
      src,
      sign: currentSign,
      name: toUtf8(originalname),
    });
    return {
      name: toUtf8(originalname),
      src,
      isHas: false,
    };
  }

  async uploadExcel(file: any, type: string) {
    const { buffer, originalname } = file;

    const currentSign = encryptFileMD5(buffer);
    const hasFile = await this.getOneBySign(currentSign);

    const arr = toUtf8(originalname).split('.');
    const fileType = arr[arr.length - 1];
    const fileName = currentSign + '.' + fileType;

    let parentFile: any;
    if (hasFile) {
      parentFile = { info: hasFile };
    } else {
      fs.writeFileSync(
        `public/uploaded/${type || 'image'}/${fileName}`,
        buffer,
      );
      const src = `/static/uploaded/${type || 'image'}/${fileName}`;
      parentFile = await this.create({
        src,
        sign: currentSign,
        name: toUtf8(originalname),
        type: 'excel',
      });
    }

    const [excelImages, modelMedia] = await exportImageFromExcel(
      `public/uploaded/${type || 'image'}/${fileName}`,
    );
    await this.batchUploadImages(excelImages, modelMedia, parentFile.info.id);

    return this.prisma.uploads.findUnique({
      where: { sign: currentSign },
      include: {
        children: true,
      },
    });
  }

  batchUploadImages = async (
    images: any[],
    modelMedia: any[],
    parentId: string,
  ) => {
    for (const image of images) {
      const img = modelMedia.find((m) => m.index === image.imageId);
      const currentSign = encryptFileMD5(img.buffer);
      const hasFile = await this.getOneBySign(currentSign);

      const fileName = currentSign + '.' + img.extension;
      if (!hasFile) {
        fs.writeFileSync(`public/uploaded/excel-image/${fileName}`, img.buffer);
        const src = `/static/uploaded/excel-image/${fileName}`;
        await this.create({
          src,
          sign: currentSign,
          name: fileName,
          parentId,
        });
      } else {
        // 如果这张图已经存在，那么就修改他的parentId为最新的文件的id
        await this.prisma.uploads.update({
          where: { sign: currentSign },
          data: {
            parentId,
          },
        });
      }
    }
  };
}
