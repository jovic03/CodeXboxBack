import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {

    //const {nickname, password} = loginDto;

    const nickname = loginDto.nickname;
    const password = loginDto.password;

    // Procura e checa se o user existe, usando o nickname
    const user = await this.prisma.user.findUnique({where:{name:nickname}});

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos');
    }

    // Valida se a senha informada é correta
    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos');
    }

    delete user.password;

    return{
      token:this.jwtService.sign({nickname}),
      user,
    };
  }
}
