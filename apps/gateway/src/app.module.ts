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
          url: 'stables:5003',
          package: 'statauto',
          protoPath: join(__dirname, '../proto/stat-auto-complete.proto'),
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
      {
        name: 'AUTHENTICATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'authentication:5004',
          package: 'statauto',
          protoPath: join(__dirname, '../proto/stat-auto-complete.proto'),
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
      {
        name: 'COURSES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'courses:5002',
          package: 'statauto',
          protoPath: join(__dirname, '../proto/stat-auto-complete.proto'),
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
      {
        name: 'PILOTES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'pilotes:5001',
          package: 'statauto',
          protoPath: join(__dirname, '../proto/stat-auto-complete.proto'),
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
      {
        name: 'TOURNAMENTS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'tournaments:5005',
          package: 'statauto',
          protoPath: join(__dirname, '../proto/stat-auto-complete.proto'),
          loader: {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
