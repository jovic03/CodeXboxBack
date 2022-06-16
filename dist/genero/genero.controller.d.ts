import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    create(user: Usuario, createGeneroDto: CreateGeneroDto): Promise<Genero>;
    update(user: Usuario, id: string, dto: UpdateGeneroDto): Promise<Genero>;
    delete(user: Usuario, id: string): void;
}
