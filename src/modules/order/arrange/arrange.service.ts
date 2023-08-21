import { Injectable } from '@nestjs/common';
import { CreateArrangeDto } from './dto/create-arrange.dto';
import { UpdateArrangeDto } from './dto/update-arrange.dto';

@Injectable()
export class ArrangeService {
  create(createArrangeDto: CreateArrangeDto) {
    return 'This action adds a new arrange';
  }

  findAll() {
    return `This action returns all arrange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arrange`;
  }

  update(id: number, updateArrangeDto: UpdateArrangeDto) {
    return `This action updates a #${id} arrange`;
  }

  remove(id: number) {
    return `This action removes a #${id} arrange`;
  }
}
