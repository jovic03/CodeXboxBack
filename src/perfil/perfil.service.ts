import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { handleError } from 'src/utils/handle-error.util';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Jogo } from 'src/jogos/entities/jogo.entity';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profiles.findMany({
      include:{usuario:true, jogo:true,}
    });
  }

  async findOne(id: string): Promise<Perfil> {
    const record = await this.prisma.profiles.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    const data: Perfil = { ...createPerfilDto };

    return this.prisma.profiles
      .create({
        data: {
          User: {
            connect: {id: createPerfilDto.userId }
          },
          title: data.title,
          ImageURL: data.ImageURL,
          jogos: {
            connect: createPerfilDto.jogoIds.map((id) => ({ id }))
          },
          jogoFavorito:{
            createMany:{
              data:createPerfilDto.jogosFavoritos.map((createPerfilDto)=>({
                jogoId: createPerfilDto.jogoFavoritoId
              }))
            }
          }
        },
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdatePerfilDto): Promise<Perfil> {
    await this.findOne(id);

    const data: Partial<Perfil> = { ...dto };

    return this.prisma.profiles.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findOne(id);

    await this.prisma.profiles.delete({
      where: { id },
    });
  }
}
