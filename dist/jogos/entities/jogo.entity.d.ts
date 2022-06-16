import { Genero } from "src/genero/entities/genero.entity";
export declare class Jogo {
    id?: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: string;
    imdbScore: string;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    genero?: Genero[];
    createdAt?: Date;
    updatedAt?: Date;
}
