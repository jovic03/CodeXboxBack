import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogoModule } from './jogos/jogo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [JogoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
