import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
export declare class PerfilService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profiles & {
        User: {
            id: string;
            name: string;
            email: string;
            cpf: string;
            isAdmin: boolean;
        };
        jogos: {
            id: string;
            title: string;
        }[];
        jogoFavorito: {
            id: string;
            jogo: {
                title: string;
                genero: import(".prisma/client").Genero[];
            };
            profile: import(".prisma/client").Profiles;
        }[];
    })[]>;
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
    create(createPerfilDto: CreatePerfilDto): Promise<import(".prisma/client").Profiles>;
    update(id: string, dto: UpdatePerfilDto): Promise<Perfil>;
    delete(id: string): Promise<void>;
}
