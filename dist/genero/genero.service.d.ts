import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Genero[]>;
    findById(id: string): Promise<Genero>;
    findOne(id: string): Promise<Genero>;
    create(user: Usuario, createGeneroDto: CreateGeneroDto): Promise<import(".prisma/client").Genero>;
    update(user: Usuario, id: string, dto: UpdateGeneroDto): Promise<Genero>;
    delete(user: Usuario, id: string): Promise<void>;
}
