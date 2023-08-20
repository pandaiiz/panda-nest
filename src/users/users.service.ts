import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { routes } from './routes';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async getUsersByPaging(query: { pageSize?: 10; current?: 1; account: any }) {
    const { pageSize = 10, current = 1, account } = query;
    const [users, count] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        include: {
          role: true,
        },
        where: {
          account: {
            contains: account,
          },
        },
        /*select: {
          id: true,
          account: true,
          name: true,
          roleId: true,
        },*/
        skip: +pageSize * (+current - 1),
        take: +pageSize,
      }),
      this.prisma.user.count(),
    ]);
    return {
      data: users,
      pagination: {
        total: count,
      },
    };
  }
  updateUser(userId: string, newUserData: UpdateUserDto) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordDto,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword,
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }

  generatePermission = (role: string) => {
    const actions = role === 'admin' ? ['*'] : ['read'];
    const result = {};
    routes.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          result[child.name] = actions;
        });
      }
    });
    return result;
  };
}
