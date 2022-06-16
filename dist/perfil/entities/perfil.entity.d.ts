import { Jogo } from "src/jogos/entities/jogo.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Perfil {
    id?: string;
    title: string;
    ImageURL?: string;
    usuario?: Usuario;
    jogo?: Jogo[];
    createdAt?: Date;
    updatedAt?: Date;
}
