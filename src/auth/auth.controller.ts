import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDatabase } from 'src/common/modules/database/auth.database';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userDatabase: AuthDatabase) {}

  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description: '아이디와 비밀번호를 통해 로그인을 진행',
  })
  public async login() {
    const result = await this.authService.Login({});

    return result;
  }

  @Post('/regist')
  @ApiOperation({
    summary: '사용자 등록',
    description: '',
  })
  public async regist() {
    const result = await this.authService.Login({});

    return result;
  }

  @Post('/sms-validate')
  @ApiOperation({
    summary: '핸드폰 문자 인증번호',
    description: '',
  })
  public async smsValidate() {
    const result = await this.authService.Login({});

    return result;
  }

  @Post('/email-validate')
  @ApiOperation({
    summary: '핸드폰 문자 인증번호',
    description: '',
  })
  public async emailValidate() {
    const result = await this.authService.Login({});

    return result;
  }
}
