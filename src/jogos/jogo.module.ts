import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule,
    PassportModule.register({defaultStrategy:'jwt'})],
  providers: [JogoService],
  controllers: [JogoController]
})
export class JogoModule {}
