import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { OrderModule } from './order/order.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
  imports: [OrderModule, EmployeeModule],
})
export class ModulesModule {}
