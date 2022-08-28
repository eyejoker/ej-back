import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { baseResponse } from '../base.dto';

export class ReqRegist {
  @ApiProperty({ name: 'userId', description: '아이디', required: true })
  readonly userId: string;

  @ApiPropertyOptional({ name: 'passwd', description: '비밀번호' })
  @IsString()
  @IsOptional()
  readonly passwd: string;

  @ApiProperty({ name: 'nick', description: '너를 뭐라고 불러야돼?', required: true })
  @IsString()
  @Length(4, 20)
  readonly nick: string;

  @ApiProperty({
    name: 'joinPath',
    description: '너 어느별에서 왔니?',
    enum: ['site', 'google', 'naver', 'kakao'],
    required: true,
  })
  @IsString()
  @IsIn(['site', 'google', 'naver', 'kakao'])
  @IsNotEmpty()
  joinPath: string;
}

export class ResRegist extends PartialType(baseResponse) {
  @ApiPropertyOptional({
    name: 'statCd',
    description: '상태코드',
    required: false,
    examples: {
      '0000': '이건 내가 저장하고 있으니 나올수 없소! 다음 상태를 받으시오',
      '0001': '이메일 오라를 받으라',
      '0002': '핸드폰 오라를 받으라',
    },
  })
  @IsString()
  @IsOptional()
  @Length(4, 4)
  statCd: string;
}
