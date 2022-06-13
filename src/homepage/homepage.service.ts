import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {

  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.profiles.findUnique({
      where:{id},
      include:{
        jogoFavorito:{
          select:{
            jogo:{
              select:{
                title:true
              }
            },
          }
        },
        jogos:{
          select:{
            title:true,
            genero:{
              select:{
                genero:true,
              }
            }
          }
        }

      }
    })
  }
}
