import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { CustomerModule } from './customer/customer.module';
import { ArrangeModule } from './arrange/arrange.module';
import { SpecificationsModule } from './specifications/specifications.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [CustomerModule, ArrangeModule, SpecificationsModule],
})
export class OrderModule {}
