import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    findAll(): Promise<Perfil[]>;
    findOne(id: string): Promise<import(".prisma/client").Profiles & {
        jogos: {
            jogoFavorito: import(".prisma/client").JogosFavoritos[];
            title: string;
            coverImageUrl: string;
            description: string;
            imdbScore: string;
            trailerYouTubeUrl: string;
            gameplayYouTubeUrl: string;
            genero: {
                genero: string;
            }[];
        }[];
    }>;
    create(createPerfilDto: CreatePerfilDto): Promise<Perfil>;
    update(id: string, dto: UpdatePerfilDto): Promise<Perfil>;
    delete(id: string): void;
}
