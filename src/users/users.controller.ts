import {
  Body,
  Controller,
  Get,
  Patch,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('info')
  async getUserInfo(@UserEntity() user: User): Promise<any> {
    return user;
  }

  @Get('paging')
  async getUsersByPaging(@Query() query) {
    return this.usersService.getUsersByPaging(query);
  }

  @Put('user')
  async updateUser(
    @UserEntity() user: User,
    @Body() newUserData: UpdateUserDto,
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @Patch(':id')
  async changePassword(
    @UserEntity() user: User,
    @Body() changePassword: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }
}
