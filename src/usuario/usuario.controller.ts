import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({
    summary:'Criar um usuario'
  })
  create(@Body() createUsuarioDto: CreateUsuarioDto){
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({
    summary:'Lista todos Usuarios'
  })
  findAll(){
    return this.usuarioService.findAll()
  }

  @Get(':email')
  @ApiOperation({
    summary:'Ver um usuario pelo email'
  })
  findOne(@Param('email') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary:'Editar um usuario pelo id'
  })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um usuario pelo ID'
  })
  delete(@Param('id') id: string) {
    return this.usuarioService.delete(id);
  }
}
