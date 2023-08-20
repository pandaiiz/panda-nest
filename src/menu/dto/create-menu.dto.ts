import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({
    description: '菜单名称',
    example: '菜单列表',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: '菜单KEY',
    example: 'MENU',
  })
  @IsNotEmpty()
  key: string;

  @ApiProperty({
    description: '父ID',
    example: '@!#SDF23',
  })
  parentId?: string;

  @ApiProperty({
    description: '是否展示面包屑',
    example: false,
  })
  breadcrumb?: boolean;

  @ApiProperty({
    description: '是否在菜单中隐藏',
    example: false,
  })
  ignore?: boolean;
}
