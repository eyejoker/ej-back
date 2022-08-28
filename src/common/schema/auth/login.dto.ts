import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsString } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqLogin {
  /**
   * 유저아이디
   *
   * @type {string}
   * @memberof ReqLogin
   */
  @ApiProperty({ name: 'userId', description: '유저아이디 or snsId', required: true })
  userId: string;

  /**
   * 암호
   *
   * @type {string}
   * @memberof ReqLogin
   */
  @ApiProperty({ name: 'pwd', description: '패스워드, 단 sns일 경우 빈값을 넣습니다.', required: false })
  passwd: string;

  /**
   * 어느별에서 왔니? - 브라운아이드걸스 (https://www.youtube.com/watch?v=N0OX1UFvCkI)
   *
   * @type {string}
   * @memberof ReqLogin
   */
  @ApiProperty({
    name: 'joinPath',
    description: '아이디의 형태',
    required: true,
    enum: ['site', 'naver', 'google', 'kakao', 'facebook'],
  })
  @IsIn(['site', 'naver', 'google', 'kakao', 'facebook'])
  joinPath: string = 'site';
}

export class LoginData {
  @IsString()
  nick: string;

  @IsNumber()
  rank: number;
}

export class ResLogin extends PartialType(baseResponse) {
  @Type(() => LoginData)
  data: LoginData | LoginData[];
}
