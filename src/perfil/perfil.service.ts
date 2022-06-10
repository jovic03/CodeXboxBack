import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { handleError } from 'src/utils/handle-error.util';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profiles.findMany({
      include:{
        User:{
          select:{
            id :true ,
            name:true ,
            email:true ,
            password:false,
            cpf:true,
            isAdmin :true ,

            createdAt : false ,
            updatedAt : false ,
          }
        },
        jogos:{
          select:{
            id: true,
            title :true,
            coverImageUrl:false,
            description:false,
            year:false,
            imdbScore:false,
            trailerYouTubeUrl:false,
            gameplayYouTubeUrl:false,

            createdAt: false,
            updatedAt: false,
          }
        },
        jogoFavorito:{
          select:{
            id:true,
            profile:true,
            jogo:{
              select:{
                title:true,
                genero:true
              }
            },
            createdAt:false,
            updatedAt: false,
          }
        }}
    });
  }

  async findOne(id: string)/*: Promise<Perfil> */{
    /*const record = await this.prisma.profiles.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;*/

    return this.prisma.profiles.findUnique({
      where:{id},
      include:{
        jogos:{
          select:{
            title:true,
            genero:{
              select:{
                genero:true,
              }
            },
            description:true,
            coverImageUrl:true,
            gameplayYouTubeUrl:true,
            trailerYouTubeUrl:true,
            imdbScore:true,
            jogoFavorito:true
          }
        }
      }
    })

  }

  create(createPerfilDto: CreatePerfilDto) {
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
            //connect: createPerfilDto.jogoIds.map((id) => ({ id }))
            //connect:{id:createPerfilDto.jogoIds} //tentativa 2
            connect:{
              title:createPerfilDto.jogoIds
            }
          },
          jogoFavorito:{
            createMany:{
              data:
              //modo1 orignal
                /*createPerfilDto.jogosFavoritos.map((createPerfilDto)=>({
                jogoId: createPerfilDto.jogoFavoritoId,
              }))*/

              //modo2
              createPerfilDto.jogosFavoritos.map((createJogoFavoritoDto)=>({
                jogoId:createJogoFavoritoDto.jogoFavoritoId,
                jogoNome:createJogoFavoritoDto.nomeJogo
              }))

            }
          }
        },
      }).catch(handleError);

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
