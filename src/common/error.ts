import { PartialType } from '@nestjs/swagger';
import { baseErrorResponse } from './schema/base.dto';

export class CustomError extends PartialType(baseErrorResponse) {
  static readonly status: number = 400;
}

export class DataNotfoundError extends PartialType(CustomError) {
  static readonly status: number = 400;
}

export class tokenExpiredError extends PartialType(CustomError) {
  static readonly status: number = 400;
}
