import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationPipe } from './validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ValidationPipe],
})
export class AppModule {}
