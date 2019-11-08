import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyValidationPipe } from './my-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(app.get(MyValidationPipe));
  await app.listen(3000);
}
bootstrap();
