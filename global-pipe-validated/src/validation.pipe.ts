import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe<T extends unknown> implements PipeTransform {
  public constructor() {}

  public async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    throw new BadRequestException('Validation triggered!');
  }
}
