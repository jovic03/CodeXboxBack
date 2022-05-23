import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { error } from 'console';
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

  async findById(id:string): Promise<Jogo>{
    const record = await this.prisma.jogos.findUnique({
      where:{id}
    });

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(id:string): Promise<Jogo>{

    return this.findById(id);

  }

  create(createJogoDto: CreateJogoDto):Promise<Jogo> {

    const data: Jogo = { ...createJogoDto };

    return this.prisma.jogos.create({data}).catch(this.handleError);

  }

  async update(id: string, dto: UpdateJogoDto): Promise<Jogo> {

    await this.findById(id);

    const data: Partial<Jogo>={...dto}

    return this.prisma.jogos.update({
      where:{id},
      data,
    })
  }

  async delete(id: string) {

    await this.findById(id);

    await this.prisma.jogos.delete({where:{id}})
  }

  handleError (error: Error): undefined{
    const errorLines = error.message?.split('\n');//a '?' verifica se o erro ocorreu
    const lastErrorLine = errorLines[errorLines.length-1]?.trim() ;
    throw new UnprocessableEntityException(lastErrorLine || 'Algum erro ocorreu ao executar a operacao');
  }

}
