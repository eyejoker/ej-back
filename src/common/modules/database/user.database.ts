import { Inject, Injectable } from '@nestjs/common';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

@Injectable()
export class UserDatabase {
  constructor(@Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>) {}

  public async findUser<UserInfo>(userId: string, t: ITask<any>): Promise<UserInfo> {
    const userInfo = await t.one<UserInfo>('SELECT * FROM user_info WHERE user_id = ${userId};', { userId });

    return userInfo;
  }
}
