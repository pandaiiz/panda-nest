import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @ApiProperty({
    description: '账号',
    example: 'wwhcer',
  })
  @IsNotEmpty({ message: '请输入账号' })
  account: string;

  @ApiProperty({
    description: '密码',
    example: '123456',
  })
  @MinLength(6)
  @IsNotEmpty({ message: '请输入密码' })
  password: string;
  firstname?: string;
  lastname?: string;
}
