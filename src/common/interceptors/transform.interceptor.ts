import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { validate } from 'class-validator';
import { CustomError } from '../error';
import { plainToInstance } from 'class-transformer';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Promise<Response<T>>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Promise<Response<T>>> {
    return next.handle().pipe(
      map(async (data) => {
        let result;
        let validateError;

        try {
          result = plainToInstance<T, T>(data.constructor, data, { enableImplicitConversion: true });

          validateError = await validate(result, {
            whitelist: true,
            validationError: { target: false },
            forbidNonWhiteliste: false,
            dismissDefaultMessages: false,
            forbidUnknownValues: true,
          });

          if (validateError.length > 0) {
            result.success = false;
            throw new CustomError('데이터에러');
          }
        } catch (e: any) {
          throw e;
        }

        return result;
      }),
    );
  }
}
