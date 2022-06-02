import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {

  const app =  await NestFactory.create<NestExpressApplication>(
    AppModule,{
    cors:true});

    app.set('trust proxy', 1)

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('XboxJovic')
    .setDescription('Dashboard do Xbox Blue-Jovic')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('jogo')
    .addTag('genero')
    .addTag('perfil')
    .addTag('usuario')
    .addTag('favoritos')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 3444);
}
bootstrap();
