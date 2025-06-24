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
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    console.log('Starting registration process for:', registerDto.email);

    try {
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
          name: registerDto.name,
          email: registerDto.email,
          password: hashedPassword,
          location: registerDto.location,
          image: registerDto.image,
          image_cover: registerDto.image_cover,
        },
      });

      const payload = { email: user.email, sub: user.id };

      const token = this.jwtService.sign(payload);
      return { token };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }

      throw new RpcException({
        code: status.INTERNAL,
        message: `Erreur lors de l'inscription: ${error.message}`,
      });
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.validateUser(loginDto.email, loginDto.password);

      if (!user) {
        throw new RpcException({
          code: status.UNAUTHENTICATED,
          message: 'Identifiants invalides',
        });
      }

      const payload = { email: user.email, sub: user.id };
      const token = this.jwtService.sign(payload);
      return { token };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }

      throw new RpcException({
        code: status.INTERNAL,
        message: `Erreur lors de la connexion: ${error.message}`,
      });
    }
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
