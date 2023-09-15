import { Controller, Get, Param } from '@nestjs/common';
import { SteelyardService } from './steelyard.service';

@Controller('steelyard')
export class SteelyardController {
  constructor(private readonly steelyardService: SteelyardService) {}
  @Get('/:port')
  async getPublishedPosts(@Param('port') port: string): Promise<any> {
    try {
      return await this.steelyardService.getWeight(port);
    } catch (error) {
      return error;
    }
  }
}
