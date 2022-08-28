import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { validate } from 'class-validator';
import { CustomError } from '../error';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Promise<Response<T>>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Promise<Response<T>>> {
    return next.handle().pipe(
      map(async (data) => {
        let validateError;

        try {
          validateError = await validate(data, {
            whitelist: true,
            validationError: { target: false },
            forbidNonWhiteliste: false,
            dismissDefaultMessages: false,
            forbidUnknownValues: true,
          });

          if (validateError.length > 0) {
            data.success = false;
            throw new CustomError('데이터에러');
          }
        } catch (e: any) {
          throw e;
        }

        return data;
      }),
    );
  }
}
