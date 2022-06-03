import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class JogoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Jogo[]> {
    return this.prisma.jogo.findMany();
  }

  async findById(id: string): Promise<Jogo> {
    const record = await this.prisma.jogo.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Jogo> {
    return this.findById(id);
  }

  create(createJogoDto: CreateJogoDto) : Promise<Jogo>
  {
    const data: Jogo = { ...createJogoDto };

    return this.prisma.jogo.create({ data }).catch(handleError);

  }

  async update(id: string, dto: UpdateJogoDto): Promise<Jogo> {
    await this.findById(id);

    const data: Partial<Jogo> = { ...dto };

    return this.prisma.jogo.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.jogo.delete({ where: { id } });
  }
}
