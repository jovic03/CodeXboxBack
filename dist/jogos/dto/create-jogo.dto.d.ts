import { Genero } from "src/genero/entities/genero.entity";
export declare class CreateJogoDto {
    title: string;
    coverImageUrl: string;
    description: string;
    year: string;
    imdbScore: string;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    genero: Genero[];
}
