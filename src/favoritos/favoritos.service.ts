import { Injectable } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class FavoritosService {
  create(createFavoritoDto: CreateFavoritoDto) {
    return 'This action adds a new favorito';
  }

  findAll() {
    return `This action returns all favoritos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} favorito`;
  }


  remove(id: string) {
    return `This action removes a #${id} favorito`;
  }
}
