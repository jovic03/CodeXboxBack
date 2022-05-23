import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
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
}
