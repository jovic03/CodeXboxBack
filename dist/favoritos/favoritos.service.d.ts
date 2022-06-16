import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Favorito } from './entities/favorito.entity';
export declare class FavoritosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFavoritoDto: CreateFavoritoDto): Promise<import(".prisma/client").JogosFavoritos>;
    findAll(): Promise<Favorito[]>;
    findOne(id: string): Promise<import(".prisma/client").JogosFavoritos>;
    delete(id: string): Promise<void>;
}
