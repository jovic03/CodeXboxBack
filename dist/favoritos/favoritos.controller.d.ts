import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
export declare class FavoritosController {
    private readonly favoritosService;
    constructor(favoritosService: FavoritosService);
    create(createFavoritoDto: CreateFavoritoDto): Promise<import(".prisma/client").JogosFavoritos>;
    findAll(): Promise<import("./entities/favorito.entity").Favorito[]>;
    findOne(id: string): Promise<import(".prisma/client").JogosFavoritos>;
    delete(id: string): Promise<void>;
}
