import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('上传模块')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @ApiOkResponse({ description: '上传' })
  @Post(':type')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: any, @Param('type') type: string): Promise<any> {
    return type === 'excel'
      ? this.uploadService.uploadExcel(file, type)
      : this.uploadService.upload(file, type);
  }
}
