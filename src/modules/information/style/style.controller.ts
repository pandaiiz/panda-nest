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
  async getListByPaging(@Query() query) {
    return this.styleService.getListByPaging(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.styleService.findOne(id);
  }
  @Get('code/:code')
  findOneByCode(@Param('styleCode') code: string) {
    return this.styleService.findOneByCode(code);
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
