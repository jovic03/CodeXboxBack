import { CreateJogoFavoritoDto } from "./create-perfil-favorito.dto";
export declare class CreatePerfilDto {
    title: string;
    ImageURL: string;
    jogoIds: string;
    userId: string;
    jogosFavoritos: CreateJogoFavoritoDto[];
}
