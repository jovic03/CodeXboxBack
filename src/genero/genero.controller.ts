import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';


@ApiTags('genero')
@Controller('genero')
export class GeneroController {

  constructor(private readonly generoService: GeneroService) {}

  @Get()
  @ApiOperation({
    summary:'Lista todos generos'
  })
  findAll(): Promise<Genero[]> {
    return this.generoService.findAll();
  }


  @Get(':id')
  @ApiOperation({
    summary:'Ver um genero'
  })
  findOne(@Param('id') id:string):Promise<Genero>{
    return this.generoService.findOne(id);
  }


  @Post()
  @ApiOperation({
    summary:'Criar um genero'
  })
  create(@Body() createGeneroDto: CreateGeneroDto):Promise<Genero> {
    return this.generoService.create(createGeneroDto);
  }


  @Patch(':id')
  @ApiOperation({
    summary:'Editar um genero pelo ID'
  })
  update(@Param('id')id:string, @Body() dto:UpdateGeneroDto): Promise<Genero>{
    return this.generoService.update(id,dto)
  }


  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um genero pelo ID'
  })
  delete(@Param('id') id:string){
    this.generoService.delete(id);//nao tem return pq só precisamos que a operacao seja feita
  }

}
