import { createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const Hostname = createParamDecorator((data: unknown, req: Request) => req.hostname);
