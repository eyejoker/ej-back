import { Body, Controller, Header, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';
import { ReqLogin, ResLogin } from 'src/common/schema/auth/login.dto';
import { ReqRegist, ResRegist } from 'src/common/schema/auth/regist.dto';
import { baseHeader } from 'src/common/schema/base.dto';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly database: IDatabase<any>,
  ) {}

  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description: '아이디와 비밀번호를 통해 로그인을 진행',
  })
  public async login(@Body() reqLogin: ReqLogin): Promise<ResLogin> {
    const result = new ResLogin();

    // await this.authService.Login({});

    return result;
  }

  @Post('/regist')
  @ApiOperation({
    summary: '사용자 등록',
    description: '',
  })
  @ApiOkResponse({ description: 'success', type: ResRegist })
  public async regist(@Body() reqRegist: ReqRegist): Promise<ResRegist> {
    const result = await this.database.tx<ResRegist>(async (t: ITask<any>) => {
      await this.authService.regist(reqRegist, t);

      return new ResRegist();
    });

    // TODO: Regist 호출 후 핸드폰 인증으로 보내자

    return result;
  }

  @Post('/sms-validate')
  @ApiOperation({
    summary: '핸드폰 문자 인증번호',
    description: '',
  })
  public async smsValidate() {
    const result = await this.authService.Login({});

    // TODO: 상태 변경 후 이메일 인증으로 보내자

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
