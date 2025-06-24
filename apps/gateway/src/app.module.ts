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
          package: 'stables',
          protoPath: '/app/packages/proto/stables.proto',
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: ['/app/packages'],
          },
        },
      },
      {
        name: 'AUTHENTICATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'authentication',
          protoPath: '/app/packages/proto/authentication.proto',
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: ['/app/packages'],
          },
        },
      },
      {
        name: 'COURSES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5002',
          package: 'courses',
          protoPath: '/app/packages/proto/courses.proto',
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: ['/app/packages'],
          },
        },
      },
      {
        name: 'PILOTES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5004',
          package: 'pilotes',
          protoPath: '/app/packages/proto/pilotes.proto',
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: ['/app/packages'],
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
