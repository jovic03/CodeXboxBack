import { Module } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [FavoritosController],
  providers: [FavoritosService]
})
export class FavoritosModule {}
