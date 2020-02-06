import { Controller, Get } from '@nestjs/common';
import {ApiOkResponse} from "@nestjs/swagger";
import { AppService } from './app.service';
import {TestResponseDto} from "./test-response.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TestResponseDto {
    return { message: this.appService.getHello() };
  }
}
