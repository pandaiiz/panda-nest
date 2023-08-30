import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PictureService } from './picture.service';

@ApiTags('图床模块')
@Controller('picture')
export class PictureController {
  constructor(private pictureService: PictureService) {}

  /*@ApiOkResponse({ description: '图片列表', type: PictureListSuccessVO })
  @Get('list')
  async getMany(@Query() pageDto: any): Promise<PictureListVO> {
    return await this.pictureService.getMany(pageDto);
  }*/

  // @ApiOkResponse({ description: '上传图片', type: PictureInfoSuccessVO })
  @ApiOkResponse({ description: '上传图片' })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: any): Promise<any> {
    return this.pictureService.upload(file);
  }
}
