import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './information/customer/customer.module';
import { TransferModule } from './transfer/transfer.module';
import { SteelyardModule } from './steelyard/steelyard.module';
import { StyleModule } from './information/style/style.module';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
  imports: [
    OrderModule,
    CustomerModule,
    StyleModule,
    TransferModule,
    SteelyardModule,
  ],
})
export class ModulesModule {}
