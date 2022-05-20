import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GeneroService {

  genero: Genero[]=[];

  findAll() {
    return this.genero;
  }

  create(createJogoDto: CreateGeneroDto) {

    const genero: Genero = { id: 'random_id', ... createJogoDto};

    this.genero.push(genero);

    return genero;
  }
}
