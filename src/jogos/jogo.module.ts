import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';

@Module({
  providers: [JogoService],
  controllers: [JogoController]
})
export class JogoModule {}
