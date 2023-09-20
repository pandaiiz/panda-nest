import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
import { CreateRoleDto } from '../role/dto/create-role.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }
  @Get('info')
  async getUserInfo(@UserEntity() user: User): Promise<any> {
    return user;
  }

  @Get('paging')
  async getUsersByPaging(@Query() query) {
    return this.usersService.getUsersByPaging(query);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() newUserData: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, newUserData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
