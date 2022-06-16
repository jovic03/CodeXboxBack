import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class JogoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Jogo[]>;
    findById(id: string): Promise<Jogo>;
    findOne(id: string): Promise<Jogo>;
    create(user: Usuario, createJogoDto: CreateJogoDto): Promise<Jogo>;
    update(user: Usuario, id: string, dto: UpdateJogoDto): Promise<Jogo>;
    delete(user: Usuario, id: string): Promise<void>;
}
