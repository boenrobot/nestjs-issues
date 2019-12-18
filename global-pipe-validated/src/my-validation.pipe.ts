import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform, ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class MyValidationPipe<T extends unknown> implements PipeTransform  {

  public async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    if (metadata.type !== 'custom') {
      throw new BadRequestException('Validation triggered!');
    }
    return value;
  }
}
