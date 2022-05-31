import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class LoginResponseDto{
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'TOKEN_GERADO_AUTOMATICAMENTE',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: Usuario;
}
