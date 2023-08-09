import { IsJWT, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty({
    description: 'token',
  })
  @IsNotEmpty()
  @IsJWT()
  token: string;
}
