import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
      isAdmin:false,
      createdAt: true,
      updatedAt: true,
    };

  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.user.findMany({
      select:this.usuarioSelect
    });
  }

  async findById(id:string){
    const record = await this.prisma.user.findUnique({
      where:{id},
      select:{
        id: true,
        name: true,
        email:true,
        password: false,
        cpf: true,
        isAdmin:false,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!record){
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(email:string){

    const data = await this.prisma.user.findUnique({
      where:{
        email:email,
      },
      select:{
        id: true,
        name: true,
        email:true,
        password: false,
        cpf: true,
        isAdmin:true,
        createdAt: true,
        updatedAt: true,
      }
    })

    if (!data){
      throw new NotFoundException('Usuario não cadastrado')
    }

    return data

  }

  async create(createuserDto: CreateUsuarioDto){


    if (createuserDto.password !== createuserDto.passwordConfirmation){
      throw new BadRequestException('Senhas não conferem.')
    }

    delete createuserDto.passwordConfirmation;

    const data : Usuario = {
      ...createuserDto,
      password: await bcrypt.hash(createuserDto.password,10)
    }

    return this.prisma.user.create({
      data,
      select:{
        id: true,
        name: true,
        email:true,
        password: false,
        cpf: true,
        isAdmin:false,
        createdAt: true,
        updatedAt: true,
      }
    })

  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto){

    await this.findById(id);

    if(updateUsuarioDto.cpf){
      throw new BadRequestException('Não é possivel alterar o CPF')
    }

    if (updateUsuarioDto.password){
      if (updateUsuarioDto.password !== updateUsuarioDto.passwordConfirmation){
        throw new BadRequestException('Senhas não conferem')
      }
    }

    delete updateUsuarioDto.passwordConfirmation;

    const data = {...updateUsuarioDto}

    if (data.password){//para caso o usuario tenha passado senha nova criar uma nova hash
      data.password = await bcrypt.hash(data.password,10)
    }

    return this.prisma.user.update({
      data,
      where:{
        id
      },
      select:{
          id: true,
          name: true,
          email:true,
          password: false,
          cpf: true,
          isAdmin:false,
          createdAt: false,
          updatedAt: false,
      }
    })

  }

  async delete(id: string) {

    await this.findById(id);

    await this.prisma.user.delete({where:{id}})
  }


}

