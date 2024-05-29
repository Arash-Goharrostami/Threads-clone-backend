import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  const configService: ConfigService<unknown, boolean> = app.get(ConfigService);

  const appPort: string = configService.get<string>('APP_PORT');
  const appHost: string = configService.get<string>('APP_HOST');

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(appPort, appHost);

  console.log('\n');
  console.log('-----------------------------------');
  console.log(`app is running on HOST:: ${appHost}`);
  console.log(`app is running on PORT:: ${appPort}`);
  console.log('-----------------------------------');
  console.log('\n');
}

bootstrap();
