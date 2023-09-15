import { Module } from '@nestjs/common';
import { SteelyardService } from './steelyard.service';
import { SteelyardController } from './steelyard.controller';

@Module({
  controllers: [SteelyardController],
  providers: [SteelyardService]
})
export class SteelyardModule {}
