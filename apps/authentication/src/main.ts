import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AllExceptionsFilter } from './filters/rpc-exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'authentication',
        protoPath: join(
          __dirname,
          '../../../packages/proto/authentication.proto',
        ),
        url: '0.0.0.0:5001',
        loader: {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
          includeDirs: [join(__dirname, '../../../packages')],
        },
      },
    },
  );

  // Appliquer le filtre d'exceptions personnalisé
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen();
}
bootstrap();
