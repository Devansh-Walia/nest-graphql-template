import { NestFactory } from '@nestjs/core';
import { applicationConfig } from 'config';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  app.use(morgan('combined'));
  app.use(
    helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }),
  );

  app.use(cookieParser('my-secret'));

  app.setGlobalPrefix('api');

  const res = await app.listen(applicationConfig.app.port, '0.0.0.0');
  const serverAddress = res.address();

  console.log(
    `⚡ Server is listening at http://${serverAddress.address}:${serverAddress.port}`,
  );
  console.log(
    `⚡ Checkout Documentation at http://${serverAddress.address}:${serverAddress.port}/api-docs`,
  );
}
bootstrap();
