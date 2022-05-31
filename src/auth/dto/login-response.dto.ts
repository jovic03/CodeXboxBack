import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class LoginResponseDto{
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InVzdWFyaW81IiwiaWF0IjoxNjU0MDI2ODI5LCJleHAiOjE2NTQxMTMyMjl9.QhY88jwLTGA6SMX5J9E5HmS0i73jRynYuLDbAnVLwBM',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: Usuario;
}
