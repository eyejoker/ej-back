import { Inject, Injectable } from '@nestjs/common';
import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase, ITask } from 'pg-promise';

@Injectable()
export class AuthDatabase {
  constructor(@Inject(NEST_PGPROMISE_CONNECTION) private readonly database: IDatabase<any>) {}

  public async findOne(t: ITask<any>): Promise<any> {
    await t.one('SELECT * FROM user_info WHERE user_id', {});
    return {};
  }

  public async findAll(t: ITask<any>): Promise<any> {
    return {};
  }

  public async insertUser(t: ITask<any>): Promise<any> {
    return {};
  }

  public async deleteUser(t: ITask<any>): Promise<any> {
    return {};
  }
}
