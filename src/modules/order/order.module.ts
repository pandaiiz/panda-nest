import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ArrangeModule } from './arrange/arrange.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [ArrangeModule],
})
export class OrderModule {}
