import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { handleError } from 'src/utils/handle-error.util';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Jogo[]> {
    return this.prisma.jogo.findMany();
  }

  async findById(id: string): Promise<Jogo> {
    const record = await this.prisma.jogo.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Jogo> {
    return this.findById(id);
  }

  create(user: Usuario,createJogoDto: CreateJogoDto) : Promise<Jogo>
  {

    if(!user.isAdmin){
      throw new UnauthorizedException('Usuario deve ser Admin para criar um jogo')
    }

    /*const data: Jogo = { ...createJogoDto };

    return this.prisma.jogo.create({ data }).catch(handleError);*/

    const data: Jogo = { ...createJogoDto };

    return this.prisma.jogo.create({
      data:{
        id:data.id,
        title:data.title,
        genero:{
          connect:{genero:data.genero.toString()}
        },
        description:data.description,
        coverImageUrl:data.coverImageUrl,
        year:data.year,
        imdbScore:data.imdbScore,
        trailerYouTubeUrl:data.trailerYouTubeUrl,
        gameplayYouTubeUrl:data.gameplayYouTubeUrl

      }
    })




  }

  async update(user: Usuario,id: string, dto: UpdateJogoDto): Promise<Jogo> {

    if(!user.isAdmin){
      throw new UnauthorizedException('Usuario deve ser Admin para atualizar um jogo')
    }

    await this.findById(id);

    const data: Partial<Jogo> = { ...dto };

    return this.prisma.jogo.update({
      where: { id },
      data,
    });
  }

  async delete(user: Usuario,id: string) {


    if(!user.isAdmin){
      throw new UnauthorizedException('Usuario deve ser Admin para deletar um jogo')
    }


    await this.findById(id);

    await this.prisma.jogo.delete({ where: { id } });
  }
}
