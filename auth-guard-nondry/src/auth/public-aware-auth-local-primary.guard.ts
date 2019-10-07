import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard, IAuthGuard, Type } from '@nestjs/passport';

@Injectable()
export class PublicAwareAuthLocalPrimaryGuard extends AuthGuard('local1') {
  public constructor(private readonly reflector: Reflector) {
    super();
  }

  public canActivate(context: ExecutionContext): ReturnType<IAuthGuard['canActivate']> {
    if (this.reflector.get<boolean>('isPublic', context.getHandler())) {
      return true;
    }

    return super.canActivate(context);
  }
}
