import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';

@ApiTags('favoritos')
@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Post()
  @ApiOperation({
    summary:'Criar um favorito'
  })
  create(@Body() createFavoritoDto: CreateFavoritoDto) {
    return this.favoritosService.create(createFavoritoDto);
  }

  @Get()
  @ApiOperation({
    summary:'Lista todos favoritos'
  })
  findAll() {
    return this.favoritosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um favorito pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.favoritosService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um favorito pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.favoritosService.delete(id);
  }
}
