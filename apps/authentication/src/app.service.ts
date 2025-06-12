import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AppService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.stable.findFirst({
      where: {
        email: registerDto.email,
      },
    });

    if (existingUser) {
      throw new RpcException({
        code: status.ALREADY_EXISTS,
        message: 'Cet email est déjà utilisé',
      });
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.prisma.stable.create({
      data: {
        ...registerDto,
        password: hashedPassword,
      },
    });
    const payload = { email: user.email, sub: user.id };
    console.log('payload', payload);
    try {
      const token = this.jwtService.sign(payload); // ça 🌵 ici
      return { token };
    } catch (error) {
      console.log('error', error);
      throw new RpcException({
        message: error.message,
      });
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Identifiants invalides',
      });
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload); // ça 🌵 ici

    return { token };
  }

  private async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.stable.findFirst({
      where: {
        email: email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateLocalUser(email: string, password: string): Promise<any> {
    return this.validateUser(email, password);
  }
}
