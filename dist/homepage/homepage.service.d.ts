import { PrismaService } from 'src/prisma/prisma.service';
export declare class HomepageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<import(".prisma/client").Profiles & {
        jogoFavorito: {
            jogo: {
                title: string;
            };
        }[];
        jogos: {
            title: string;
            genero: {
                genero: string;
            }[];
        }[];
    }>;
}
