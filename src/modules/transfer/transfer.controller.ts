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
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  create(@Body() createTransferDto: CreateTransferDto) {
    return this.transferService.create(createTransferDto);
  }
  @Post('item')
  createTransferItem(@Body() createTransferItemDto: any) {
    return this.transferService.createTransferItem(createTransferItemDto);
  }
  @Post('batch')
  batchCreate(@Body() createTransferDto: any) {
    return this.transferService.batchCreate(createTransferDto);
  }

  @Get()
  findAll() {
    return this.transferService.findAll();
  }
  @Get('details/paging')
  async getDetailsListByPaging(@Query() query) {
    return this.transferService.getDetailsListByPaging(query);
  }
  @Get('paging')
  async getListByPaging(@Query() query) {
    return this.transferService.getListByPaging(query);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransferDto: UpdateTransferDto,
  ) {
    return this.transferService.update(+id, updateTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferService.remove(+id);
  }
}
