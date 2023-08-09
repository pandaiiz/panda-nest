import { IsJWT, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'token',
  })
  @IsNotEmpty()
  @IsJWT()
  token: string;
}
