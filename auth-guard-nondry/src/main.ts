import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PublicAwareAuthLocalAlternativeGuard } from './auth/public-aware-auth-local-alternative.guard';
import { PublicAwareAuthLocalPrimaryGuard } from './auth/public-aware-auth-local-primary.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(app.get(PublicAwareAuthLocalPrimaryGuard), app.get(PublicAwareAuthLocalAlternativeGuard));
  await app.listen(3000);
}
bootstrap();
