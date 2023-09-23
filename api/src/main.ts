import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "Cors";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

     app.enableCors();
     app.setGlobalPrefix('api');
     await app.listen(3000);
}
bootstrap();
