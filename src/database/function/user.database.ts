import { Inject, Injectable } from '@nestjs/common';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';
import { ReqRegist } from 'src/common/schema/auth/regist.dto';

@Injectable()
export class UserDatabase {
  constructor(@Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>) {}

  public async findUser<UserInfo>(userId: string, t: ITask<any>): Promise<UserInfo> {
    const userInfo = await t.one<UserInfo>('SELECT * FROM user_info WHERE user_id = ${userId};', { userId });

    return userInfo;
  }

  public async registUser<T, J>(reqRegist: ReqRegist, t: ITask<any>): Promise<J> {
    let result: J;
    // const userInfo = await t.one<UserInfo>('SELECT * FROM user_info WHERE user_id = ${userId};', { userId });

    const userSeqId = '';
    const callbackData = await t.oneOrNone('', { userSeqId });

    // return userInfo;

    return result;
  }
}
