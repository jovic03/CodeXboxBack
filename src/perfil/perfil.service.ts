import { Injectable , NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class PerfilService {

  constructor(private readonly prisma: PrismaService) {}

  findAll():Promise<Perfil[]>{
    return this.prisma.profiles.findMany();
  }

  async findOne(id:string): Promise<Perfil>{
    const record= await this.prisma.profiles.findUnique({where:{id}})

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;

  }

  create(createPerfilDto:CreatePerfilDto):Promise<Perfil>{
    const data: Perfil = { ...createPerfilDto };

    return this.prisma.profiles.create({
      data,
    }).catch(handleError);

  }


  async update(id:string,dto:UpdatePerfilDto):Promise<Perfil>{

    await this.findOne(id);

    const data:Partial<Perfil> = {... dto};

    return this.prisma.profiles.update({
      where:{id},
      data,
    });
  }

  async delete(id:string){

    await this.findOne(id);

    await this.prisma.profiles.delete({
      where:{id}
    });
  }
}
