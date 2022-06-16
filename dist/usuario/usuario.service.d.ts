import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsuarioService {
    private readonly prisma;
    private usuarioSelect;
    constructor(prisma: PrismaService);
    create(createuserDto: CreateUsuarioDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        cpf: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        cpf: string;
        isAdmin: boolean;
    }[]>;
    findById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        cpf: string;
    }>;
    findOne(email: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        cpf: string;
        isAdmin: boolean;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        name: string;
        id: string;
        email: string;
        cpf: string;
    }>;
    delete(id: string): Promise<void>;
}
