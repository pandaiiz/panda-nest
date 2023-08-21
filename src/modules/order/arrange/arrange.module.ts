import { Module } from '@nestjs/common';
import { ArrangeService } from './arrange.service';
import { ArrangeController } from './arrange.controller';

@Module({
  controllers: [ArrangeController],
  providers: [ArrangeService]
})
export class ArrangeModule {}
