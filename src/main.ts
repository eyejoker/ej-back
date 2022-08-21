import { NestFactory } from '@nestjs/core';
import config from 'config';

import { AppModule } from './app.module';

import { useGlobal } from './common/useGlobal.lib';
import { useSwegger } from './common/useSwagger.lib';

async function bootstrap() {
  const host = config.get<string>('SERVER.host');
  const port = config.get<number>('SERVER.port');

  const app = await NestFactory.create(AppModule);

  useGlobal(app);
  useSwegger(app);

  await app.listen(port, host);
}

bootstrap();
