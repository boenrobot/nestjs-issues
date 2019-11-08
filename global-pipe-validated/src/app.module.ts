import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyValidationPipe } from './my-validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyValidationPipe],
})
export class AppModule {}
