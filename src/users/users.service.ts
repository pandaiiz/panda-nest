import { PrismaService } from 'nestjs-prisma';
import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { routes } from './routes';
import { Prisma } from '@prisma/client';

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
  async create(createUserDto: any) {
    const hashedPassword = await this.passwordService.hashPassword('123456');

    try {
      return this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`用户名 ${createUserDto.account}已存在！`);
      }
      throw new Error(e);
    }
  }
  updateUser(userId: string, newUserData: UpdateUserDto) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }
  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
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
