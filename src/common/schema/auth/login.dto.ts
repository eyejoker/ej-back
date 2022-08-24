import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsIn } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqLogin {
  @ApiProperty({ name: 'userId', description: '유저아이디 or snsId', required: true })
  userId: string;

  @ApiProperty({ name: 'pwd', description: '패스워드, 단 sns일 경우 빈값을 넣습니다.', required: false })
  pwd: string;

  @ApiProperty({
    name: 'joinPath',
    description: '아이디의 형태',
    required: true,
    enum: ['site', 'naver', 'google', 'kakao', 'facebook'],
  })
  @IsIn(['site', 'naver', 'google', 'kakao', 'facebook'])
  joinPath: string = 'site';
}

export class ResLogin extends PartialType(baseResponse) {
  
  nick: string;


}
