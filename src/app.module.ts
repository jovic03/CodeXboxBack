import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneroModule } from './genero/genero.module';
import { JogoModule } from './jogos/jogo.module';
import { PrismaModule } from './prisma/prisma.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { PerfilModule } from './perfil/perfil.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [JogoModule, GeneroModule, PrismaModule, FavoritosModule, PerfilModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
