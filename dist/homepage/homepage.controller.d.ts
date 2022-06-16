import { HomepageService } from './homepage.service';
export declare class HomepageController {
    private readonly homepageService;
    constructor(homepageService: HomepageService);
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
