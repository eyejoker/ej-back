import { NestFactory } from '@nestjs/core';
import config from 'config';

import { AppModule } from './app.module';

import { useGlobals } from './common/globals/useGlobal.lib';
import { useSwegger } from './common/globals/useSwagger.lib';

async function bootstrap() {
  const host = config.get<string>('SERVER.host');
  const port = config.get<number>('SERVER.port');

  const app = await NestFactory.create(AppModule);

  useGlobals(app);
  useSwegger(app);

  await app.listen(port, host);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
