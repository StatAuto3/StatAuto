import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rpcContext = context.switchToRpc();
    const metadata = rpcContext.getContext();

    // Récupérer le token depuis les métadonnées gRPC
    const token = this.extractTokenFromMetadata(metadata);
    if (!token) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Token manquant - vous devez être connecté',
      });
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      metadata.user = payload;
    } catch {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Token invalide - veuillez vous reconnecter',
      });
    }
    return true;
  }

  private extractTokenFromMetadata(metadata: any): string | undefined {
    // Pour gRPC, le token est généralement dans les métadonnées
    const authMetadata = metadata?.authorization || metadata?.Authorization;
    if (!authMetadata) return undefined;

    const [type, token] = authMetadata.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
