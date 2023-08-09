import { AuthService } from './auth.service';
import { Dto } from './dto/dto';
import { SignupDto } from './dto/signup.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('signup')
  async signup(@Body() data: SignupDto) {
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }
  @Post('login')
  async login(@Body() { account, password }: Dto) {
    const { accessToken, refreshToken } = await this.auth.login(
      account,
      password,
    );
    return {
      accessToken,
      refreshToken,
    };
  }
  @Post('refreshToken')
  async refreshToken(@Body() { token }: RefreshTokenDto) {
    return this.auth.refreshToken(token);
  }

  @Post('getUserFromToken')
  async getUserFromToken(@Body() { token }: RefreshTokenDto) {
    return this.auth.getUserFromToken(token);
  }
}
