import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from 'config';

// .setContact('coala', 'coala.co.kr', 'dona@hs88.kr')
export const useSwegger = (app): void => {
  const builderConfig = new DocumentBuilder()
    .setTitle(config.get<string>('SWAGGER.title'))
    .setDescription(config.get<string>('SWAGGER.description'))
    .setVersion(config.get<string>('SWAGGER.version'))
    .addSecurity('authorization', {
      type: 'apiKey',
      scheme: 'bearer',
      name: 'authorization',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, builderConfig);

  SwaggerModule.setup(config.get<string>('SWAGGER.path'), app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      displayRequestDuration: true,
    },
  });
};
