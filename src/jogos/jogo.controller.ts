import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Jogo } from './entities/jogo.entity';
import { UpdateJogoDto } from './dto/update-jogo.dto';


@ApiTags('jogo')
@Controller('jogo')
export class JogoController {

  constructor(private readonly jogoService: JogoService) {}

  @Get()
  @ApiOperation({
    summary:'Lista todos Jogos'
  })
  findAll(): Promise<Jogo[]> {
    return this.jogoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:'Ver um jogo'
  })
  findOne(@Param('id') id:string):Promise<Jogo>{
    return this.jogoService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary:'Criar um Jogo'
  })
  create(@Body() createJogoDto: CreateJogoDto):Promise<Jogo> {
    return this.jogoService.create(createJogoDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary:'Editar um jogo pelo ID'
  })
  update(@Param('id') id:string, @Body() dto:UpdateJogoDto):Promise<Jogo>{
    return this.jogoService.update(id,dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um jogo pelo ID'
  })
  delete(@Param('id') id:string){
    this.jogoService.delete(id);//nao tem return pq só precisamos que a operacao seja feita
  }
}
