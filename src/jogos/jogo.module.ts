import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [JogoService],
  controllers: [JogoController]
})
export class JogoModule {}
