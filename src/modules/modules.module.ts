import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './information/customer/customer.module';
import { SpecificationsModule } from './information/specifications/specifications.module';
import { TransferModule } from './transfer/transfer.module';
import { SteelyardModule } from './steelyard/steelyard.module';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
  imports: [OrderModule, CustomerModule, SpecificationsModule, TransferModule, SteelyardModule],
})
export class ModulesModule {}
