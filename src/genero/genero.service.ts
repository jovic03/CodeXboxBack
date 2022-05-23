import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GeneroService {


  //genero: Genero[]=[];

  constructor(private readonly prisma: PrismaService){}

  findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  findOne(id:string):Promise<Genero>{
    return this.prisma.genero.findUnique({
      where:{
        id:id,
      }
    })
  }

  create(createGeneroDto: CreateGeneroDto):Promise<Genero> {

    const data: Genero = {... createGeneroDto};

    return this.prisma.genero.create({data})

  }

  update(id: string, dto: UpdateGeneroDto): Promise<Genero> {

    const data: Partial<Genero> ={...dto}

    return this.prisma.genero.update({
      where:{id},
      data,
    })
  }
}
