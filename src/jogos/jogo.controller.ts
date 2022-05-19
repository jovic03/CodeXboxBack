import { Body, Controller, Get, Post } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('jogo')
@Controller('jogo')
export class JogoController {

  constructor(private jogoService: JogoService) {}

  @Get()
  findAll() {
    return this.jogoService.findAll();
  }

  @Post()
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogoService.create(createJogoDto);
  }
}
