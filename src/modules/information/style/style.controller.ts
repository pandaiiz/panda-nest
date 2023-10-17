import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { StyleService } from './style.service';
import { UpdateStyleDto } from './dto/update-style.dto';

@Controller('style')
export class StyleController {
  constructor(private readonly styleService: StyleService) {}
  @Post()
  create(@Body() createSpecificationDto: any) {
    return this.styleService.create(createSpecificationDto);
  }

  @Get()
  findAll() {
    return this.styleService.findAll();
  }

  @Get('paging')
  async getListByPaging(@Query() query: any) {
    return this.styleService.getListByPaging(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.styleService.findOne(id);
  }
  @Get('code/:code')
  findOneByCode(@Param('code') code: string) {
    return this.styleService.findOneByCode(code);
  }
  @Get('baseCode/:baseStyleCode')
  findListByBaseCode(@Param('baseStyleCode') baseStyleCode: string) {
    return this.styleService.findListByBaseCode(baseStyleCode);
  }
  @Get('filter/:filter')
  findListByFilter(@Param('filter') filter: string) {
    return this.styleService.findListByFilter(filter);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecificationDto: UpdateStyleDto,
  ) {
    return this.styleService.update(id, updateSpecificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.styleService.remove(id);
  }
}
