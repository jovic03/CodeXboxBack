import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('genero')
@Controller('genero')
export class GeneroController {

  constructor(private generoService: GeneroService) {}

  @Get()
  findAll() {
    return this.generoService.findAll();
  }

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }
}
