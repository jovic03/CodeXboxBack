import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';


@ApiTags('perfil')
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get()
  @ApiOperation({summary:'Listar todos perfis'})
  findAll(): Promise<Perfil[]>{
    return this.perfilService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Vizualizar um perfil'})
  findOne(@Param('id') id:string): Promise<Perfil>{
    return this.perfilService.findOne(id);
  }


  @Post()
  @ApiOperation({summary:'criar um perfil'})
  create(@Body() createPerfilDto:CreatePerfilDto): Promise<Perfil> {
    return this.perfilService.create(createPerfilDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar/Editar um perfil pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdatePerfilDto): Promise<Perfil> {
    return this.perfilService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta um perfil pelo ID',
  })
  delete(@Param('id') id: string) {
    this.perfilService.delete(id);
  }
}
