import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneroModule } from './genero/genero.module';
import { JogoModule } from './jogos/jogo.module';
import { PrismaModule } from './prisma/prisma.module';
import { FavoritosModule } from './favoritos/favoritos.module';

@Module({
  imports: [JogoModule, GeneroModule, PrismaModule, FavoritosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
