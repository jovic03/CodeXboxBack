import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { handleError } from 'src/utils/handle-error.util';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

    private usuarioSelect = {
      id: true,
      name: true,
      email:true,
      password: false,
      cpf: true,
      isAdmin:true,
      createdAt: true,
      updatedAt: true,
    };

  constructor(private readonly prisma: PrismaService){}

  findAll(): Promise<Usuario[]> {
    return this.prisma.user.findMany();
  }

  async findById(id:string): Promise<Usuario>{
    const record = await this.prisma.user.findUnique({
      where:{id},
      select:this.usuarioSelect,
    });

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(id:string): Promise<Usuario>{

    return this.findById(id);

  }

  async create(createuserDto: CreateUsuarioDto):Promise<Usuario> {

    const data: Usuario = {
      ...createuserDto,
      password: await bcrypt.hash(createuserDto.password,10)
    };

    return this.prisma.user.create({
      data,
      select:this.usuarioSelect,
    }).catch(handleError);

  }

  async update(id: string, dto: UpdateUsuarioDto): Promise<Usuario> {

    await this.findById(id);

    const data: Partial<Usuario>={...dto};

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }


    return this.prisma.user.update({
      where:{id},
      data,
      select:this.usuarioSelect,
    }).catch(handleError);
  }

  async delete(id: string) {

    await this.findById(id);

    await this.prisma.user.delete({where:{id}})
  }


}

