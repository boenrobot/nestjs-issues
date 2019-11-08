import {Controller, Get, Query, Req} from '@nestjs/common';
import {Request} from "express";
import {ParsedUrlQuery} from "querystring";
import { AppService } from './app.service';
import { Hostname } from './hostname.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Hostname() hostname: string): string {
    return this.appService.getHello();
  }

  @Get('/validates')
  getQuery(@Query() query: ParsedUrlQuery): ParsedUrlQuery {
    return query;
  }

  @Get('/validates-not')
  getHelloForReal(): string {
    return this.appService.getHello();
  }

  @Get('/validates-not-also')
  getHostnameForReal(@Req() req: Request): string {
    return req.hostname;
  }
}
