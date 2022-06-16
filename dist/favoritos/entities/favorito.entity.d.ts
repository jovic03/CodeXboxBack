import { Perfil } from "src/perfil/entities/perfil.entity";
import { Jogo } from "src/jogos/entities/jogo.entity";
export declare class Favorito {
    id?: string;
    profile?: Perfil;
    jogo?: Jogo[];
    createdAt?: Date;
    updatedAt?: Date;
}
