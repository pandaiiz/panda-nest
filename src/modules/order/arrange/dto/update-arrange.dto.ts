import { PartialType } from '@nestjs/mapped-types';
import { CreateArrangeDto } from './create-arrange.dto';

export class UpdateArrangeDto extends PartialType(CreateArrangeDto) {}
