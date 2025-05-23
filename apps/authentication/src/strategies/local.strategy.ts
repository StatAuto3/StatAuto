import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { AppService } from 'src/app.service';
import { Stable } from 'generated/prisma';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private appService: AppService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<Omit<Stable, "password">> {
    const user = await this.appService.validateLocalUser(email, password);
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Identifiants invalides'
      });
    }
    return user;
  }
}