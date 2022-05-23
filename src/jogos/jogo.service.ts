import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';

@Injectable()
export class JogoService {


  //jogo: Jogo[]=[];

  constructor(private readonly prisma: PrismaService){}

  findAll(): Promise<Jogo[]> {
    return this.prisma.jogos.findMany();
  }

  findOne(id:string): Promise<Jogo>{
    return this.prisma.jogos.findUnique({
      where:{
        id:id,
      }
    })
  }

  create(createJogoDto: CreateJogoDto):Promise<Jogo> {

    const data: Jogo = { ...createJogoDto };

    return this.prisma.jogos.create({data});

  }

  update(id: string, dto: UpdateJogoDto): Promise<Jogo> {

    const data: Partial<Jogo>={...dto}

    return this.prisma.jogos.update({
      where:{id},
      data,
    })
  }

  async delete(id: string) {
    await this.prisma.jogos.delete({where:{id}})
  }

}
