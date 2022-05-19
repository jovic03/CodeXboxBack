import { Injectable } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';

@Injectable()
export class JogoService {

  jogo: Jogo[]=[];

  findAll() {
    return this.jogo;
  }

  create(createJogoDto: CreateJogoDto) {

    const jogo: Jogo = { id: 'random_id', ...createJogoDto };

    this.jogo.push(jogo);

    return jogo;
  }
}
