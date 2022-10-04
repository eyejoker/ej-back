import { Global, Module } from '@nestjs/common';
import { NestPgpromiseModule } from 'nestjs-pgpromise';
import config from 'config';
import pgPromise from 'pg-promise';
import { UserDatabase } from './function/user.database';
import { AuthDatabase } from './function/auth.database';

const database = NestPgpromiseModule.register({
  connection: {
    host: config.get<string>('DATABASE.host'),
    port: config.get<number>('DATABASE.port'),
    database: config.get<string>('DATABASE.database'),
    user: config.get<string>('DATABASE.user'),
    password: config.get<string>('DATABASE.password'),
  },
  initOptions: {
    receive: (data: any[]) => {
      const tmp = data[0];

      for (const prop in tmp) {
        const camel = pgPromise.utils.camelize(prop);
        if (!(camel in tmp)) {
          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            d[camel] = d[prop];
            delete d[prop];
          }
        }
      }
    },
  },
});

@Global()
@Module({
  imports: [database],
  exports: [database, UserDatabase, AuthDatabase],
  controllers: [],
  providers: [UserDatabase, AuthDatabase],
})
export class DatabaseModule {}
