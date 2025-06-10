import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STABLES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5003',
          package: 'stable',
          protoPath: join(__dirname, '../../stables/proto/stable.proto'),
        },
      },
      {
        name: 'AUTHENTICATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5004',
          package: 'authentication',
          protoPath: join(
            __dirname,
            '../../authentication/proto/authentication.proto',
          ),
        },
      },
      {
        name: 'PILOTE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'pilote',
          protoPath: join(__dirname, '../../pilotes/proto/pilote.proto'),
        },
      },

    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
