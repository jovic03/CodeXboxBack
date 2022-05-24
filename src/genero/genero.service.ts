import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
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

  create(createGeneroDto: CreateGeneroDto):Promise<Genero> {

    const data: Genero = {... createGeneroDto};

    return this.prisma.genero.create({data}).catch(this.handleError)

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

  handleError (error: Error): undefined{
    const errorLines = error.message?.split('\n');//a '?' verifica se o erro ocorreu
    const lastErrorLine = errorLines[errorLines.length-1]?.trim() ;
    throw new UnprocessableEntityException(lastErrorLine || 'Algum erro ocorreu ao executar a operacao');
  }

}
