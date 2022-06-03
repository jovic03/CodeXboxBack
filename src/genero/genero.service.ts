import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';
import { handleError} from 'src/utils/handle-error.util';

@Injectable()
export class GeneroService {



  //genero: Genero[]=[];

  constructor(private readonly prisma: PrismaService){}

  findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async findById(id:string): Promise<Genero>{
    const record = await this.prisma.genero.findUnique({
      where:{id}
    });

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(id:string):Promise<Genero>{

    return this.findById(id);
  }

  async create(createGeneroDto: CreateGeneroDto)/*:Promise<Genero>*/ {

    /*const data: Genero = {... createGeneroDto};

    return this.prisma.genero.create({data}).catch(handleError)*/

    const genero = await this.prisma.genero.findUnique({
      where:{
        genero:createGeneroDto.genero
      }
    })

    if (genero){
      throw new NotFoundException('Nome do genero já cadastrado.')
    }

    return this.prisma.genero.create({
      data:{
        genero:createGeneroDto.genero
      }
    })

  }

  async update(id: string, dto: UpdateGeneroDto): Promise<Genero> {

    await this.findById(id);

    const data: Partial<Genero> ={...dto}

    return this.prisma.genero.update({
      where:{id},
      data,
    })
  }

  async delete(id: string) {

    await this.findById(id);

    await this.prisma.genero.delete({where:{id}})
  }


}
