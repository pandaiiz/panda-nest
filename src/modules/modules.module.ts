import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { OrderModule } from './order/order.module';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService],
  imports: [OrderModule],
})
export class ModulesModule {}
