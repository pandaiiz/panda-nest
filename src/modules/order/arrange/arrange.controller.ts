import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArrangeService } from './arrange.service';
import { CreateArrangeDto } from './dto/create-arrange.dto';
import { UpdateArrangeDto } from './dto/update-arrange.dto';

@Controller('arrange')
export class ArrangeController {
  constructor(private readonly arrangeService: ArrangeService) {}

  @Post()
  create(@Body() createArrangeDto: CreateArrangeDto) {
    return this.arrangeService.create(createArrangeDto);
  }

  @Get()
  findAll() {
    return this.arrangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arrangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArrangeDto: UpdateArrangeDto) {
    return this.arrangeService.update(+id, updateArrangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arrangeService.remove(+id);
  }
}
