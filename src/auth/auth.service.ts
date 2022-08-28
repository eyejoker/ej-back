import { Injectable } from '@nestjs/common';
import { ITask } from 'pg-promise';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  public async insert_userInfo(registInfo: any, t: ITask<any>) {
    t.oneOrNone
  }
  /**
   * 회원가입 처리
   *
   * @param {*} registInfo
   * @param {ITask<any>} t
   * @memberof AuthDatabase
   */
  public async regist(registInfo: any, t: ITask<any>) {
    const userSeqId = uuidv4();

    // INSET INTO user_info (user_id, nick, email, stat_cd) VALUES ()
    await t.oneOrNone('', { userSeqId });
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
   * @param {ITask<any>}
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
