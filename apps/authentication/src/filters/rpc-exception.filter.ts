import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class CustomRpcExceptionFilter
  implements RpcExceptionFilter<RpcException>
{
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    return throwError(() => exception.getError());
  }
}

@Catch()
export class AllExceptionsFilter implements RpcExceptionFilter {
  catch(exception: any, host: ArgumentsHost): Observable<any> {
    console.error('Unhandled exception:', exception);

    // Si c'est déjà une RpcException, la renvoyer
    if (exception instanceof RpcException) {
      return throwError(() => exception.getError());
    }

    // Sinon, créer une RpcException générique
    const rpcException = new RpcException({
      code: 13, // INTERNAL
      message: exception.message || 'Erreur interne du serveur',
    });

    return throwError(() => rpcException.getError());
  }
}
