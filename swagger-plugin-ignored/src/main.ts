import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const openapiPath = resolve(__dirname, '..', 'openapi.json');

  writeFileSync(openapiPath, JSON.stringify(SwaggerModule.createDocument(app, (new DocumentBuilder()).build()), null, 2));
  console.log(`Created file at ${openapiPath}`);
  await app.listen(3000);
}
bootstrap();
