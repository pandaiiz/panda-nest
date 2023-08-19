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
import { generatePermission, routes } from './routes';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('info')
  async getUserInfo(@UserEntity() user: User): Promise<any> {
    return {
      user,
      name: 'vvv',
      avatar:
        'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
      email: 'wangliqun@email.com',
      job: 'frontend',
      jobName: '前端开发工程师',
      organization: 'Frontend',
      organizationName: '前端',
      location: 'beijing',
      locationName: '北京',
      introduction: '王力群并非是一个真实存在的人。',
      personalWebsite: 'https://www.arco.design',
      verified: true,
      phoneNumber: '13823333333',
      accountId: 'zz-15153424',
      registrationTime: '2021-12-09 05:07:52',
      permissions: generatePermission('user'),
      routes,
    };
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
