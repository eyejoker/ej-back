import { Injectable } from '@nestjs/common';
import { ITask } from 'pg-promise';

@Injectable()
export class AuthService {
  /**
   * 회원가입 처리
   *
   * @param {*} registInfo
   * @param {ITask<any>} t
   * @memberof AuthDatabase
   */
  public async regist(registInfo: any) {
    return {};
  }

  /**
   * 로그인 처리
   *
   * @param {*} loginInfo
   * @param {ITask<any>}
   * @memberof AuthDatabase
   */
  public async Login(loginInfo: any) {
    return {};
  }

  /**
   * 이메일 인증코드 처리
   *
   * @param {*} emailInfo
   * @param {ITask<any>} t
   * @memberof AuthDatabase
   */
  public async emailValidate(emailInfo: any) {
    return {};
  }

  /**
   * 문자 인증코드 처리
   *
   * @param {*} emailInfo
   * @param {ITask<any>} t
   * @memberof AuthDatabase
   */
  public async smsValidate(emailInfo: any) {
    return {};
  }
}
