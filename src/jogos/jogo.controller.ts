import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Jogo } from './entities/jogo.entity';


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
}
