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
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
  @Get('details')
  findAllOrderDetails(@Query() query: any) {
    return this.orderService.findAllOrderDetails(query);
  }
  @Get('details/:id')
  findOrderDetailsById(@Param('id') id: string) {
    return this.orderService.findOrderDetailsById(id);
  }

  @Get('paging')
  async getListByPaging(@Query() query) {
    return this.orderService.getListByPaging(query);
  }

  @Get('copy/:id')
  copyOrderById(@Param('id') id: string) {
    return this.orderService.copyOrderById(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
  @Delete('/detail/:id')
  removeItem(@Param('id') id: string) {
    return this.orderService.removeItem(id);
  }
}
