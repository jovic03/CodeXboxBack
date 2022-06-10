import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { handleError } from 'src/utils/handle-error.util';
import { PrismaService } from 'src/prisma/prisma.service';
import { Favorito } from './entities/favorito.entity';

@Injectable()
export class FavoritosService {

  constructor(private readonly prisma: PrismaService){}

  async create(createFavoritoDto: CreateFavoritoDto) {



    const favorito = await this.prisma.jogosFavoritos.findUnique({
      where:{
        perfilId_jogoId: {...createFavoritoDto}
      }
    })

    if(favorito){
      throw new NotFoundException('Você já favoritou este jogo.')
    }

    return this.prisma.jogosFavoritos.create({
      data:{
        jogoId:createFavoritoDto.jogoId,
        perfilId:createFavoritoDto.perfilId
      }
    })
  }

  findAll(): Promise<Favorito[]> {
    return this.prisma.jogosFavoritos.findMany() ;
  }

  async findOne(id: string) {
    const record = await this.prisma.jogosFavoritos.findUnique({
      where:{id}
    });

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }


  async delete(id: string) {

    await this.findOne(id);

    await this.prisma.jogosFavoritos.delete({where:{id}})
  }
}
