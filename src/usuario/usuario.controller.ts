import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({
    summary:'Criar um usuario'
  })
  create(@LoggedUser() user: Usuario ,@Body() createUsuarioDto: CreateUsuarioDto){
    return this.usuarioService.create(user,createUsuarioDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary:'Lista todos Usuarios'
  })
  findAll(){
    return this.usuarioService.findAll()
  }

  @Get(':email')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary:'Ver um usuario pelo email'
  })
  findOne(@Param('email') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary:'Editar um usuario pelo id'
  })
  update(@LoggedUser() user: Usuario ,@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(user,id, updateUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um usuario pelo ID'
  })
  delete(@LoggedUser() user: Usuario ,@Param('id') id: string) {
    return this.usuarioService.delete(user,id);
  }
}
