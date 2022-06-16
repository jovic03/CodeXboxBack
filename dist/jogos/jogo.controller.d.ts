import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class JogoController {
    private readonly jogoService;
    constructor(jogoService: JogoService);
    findAll(): Promise<Jogo[]>;
    findOne(id: string): Promise<Jogo>;
    create(user: Usuario, createJogoDto: CreateJogoDto): Promise<Jogo>;
    update(user: Usuario, id: string, dto: UpdateJogoDto): Promise<Jogo>;
    delete(user: Usuario, id: string): void;
}
