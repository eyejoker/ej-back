import { INestApplication, ValidationPipe } from '@nestjs/common';

export const useGlobals = (app: INestApplication): void => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // validationError: { target: false },
      forbidNonWhitelisted: true,
      transform: true,
      // skipMissingProperties: true,
      disableErrorMessages: true,
    }),
  );
};
