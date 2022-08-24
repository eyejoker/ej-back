import { ApiProperty } from '@nestjs/swagger';

export class ReqRegist {
  @ApiProperty({ name: 'userId', description: '유저아이디', required: true })
  readonly userId: string;

  @ApiProperty({ name: 'userId', description: '유저아이디', required: true })
  readonly passwd: string;
}

export class ResRegist {
  success: boolean;
  statCd: string;
}
