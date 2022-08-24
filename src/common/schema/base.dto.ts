import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsIP, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * base header class
 * 헤더의 값들중 기본으로 받을것을 적습니다.
 *
 * @export
 * @class baseHeader
 */
export class baseHeader {
  /**
   * JWT 사용시 인증서를 담는다.
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsOptional()
  authorization: string;

  /**
   * 브라우저가 어떤 녀석인지
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsOptional()
  'user-agent': string;

  /**
   * 사용자의 IP / LB를 쓸 경우를 대비
   *
   * @type {string}
   * @memberof baseHeader
   */
  @ApiProperty({
    name: 'ip',
    type: String,
    example: '0.0.0.0',
    description: '사용자의 IP / LB를 쓸 경우를 대비',
    required: true,
  })
  @IsIP()
  ip: string;

  /**
   * sessionid / 프론트서버에서 호출할 경우를 대비
   *
   * @type {string}
   * @memberof baseHeader
   */
  @IsString()
  @IsOptional()
  sid: string;

  @IsString()
  @IsOptional()
  country: string;
}

/**
 * base response class
 * 리스
 *
 * @export
 * @class baseResponse
 */
export class baseResponse {
  /**
   * 서버의 시간을 반환합니다.
   *
   * @type {number}
   * @memberof baseResponse
   */
  @ApiProperty({ name: 'timestamp', description: '서버의 시간을 반환합니다.', required: true })
  @IsNumber()
  timestamp: number;

  /**
   * API의 성공여부를 반환합니다.
   *
   * @type {boolean}
   * @memberof baseResponse
   */
  @ApiProperty({ name: 'success', description: 'API 성공여부를 반환합니다.', required: true })
  @IsBoolean()
  success: boolean = true;
}

/**
 * base response error class
 *
 * @export
 * @class baseErrorResponse
 * @extends {PartialType(baseResponse)}
 */
export class baseErrorResponse extends PartialType(baseResponse) {
  /**
   * 에러 코드를 반환합니다.
   *
   * @type {string}
   * @memberof baseErrorResponse
   */
  @ApiProperty({ name: 'errorCode', description: '에러코드를 반환합니다.', required: true })
  @IsString()
  @IsNotEmpty()
  errorCode: string;

  /**
   * 에러 메세지를 반환합니다.
   *
   * @type {string}
   * @memberof baseErrorResponse
   */
  @ApiProperty({ name: 'errorMessage', description: '에러메세지를 반환합니다.', required: true })
  @IsString()
  @IsNotEmpty()
  errorMessage: string;
}
