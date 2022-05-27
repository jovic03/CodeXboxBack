import { IsString, MinLength, Matches, Max, IsByteLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {

  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Utilizado no login. Deve ser único',
    example: 'paulosalvatore',
  })
  name:string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuario',
    example: 'paulosalvatore@gmail.com',
  })
  email:string;



  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password:string;

  @IsString()
  @IsByteLength(11)
  @ApiProperty({
    description: 'CPF do usuario (deve ter 11 caracteres',
    example: '12345678911',
  })
  cpf:string;

  @IsString()
  @ApiProperty({
    description: 'Este usuario é admin?',
    example: 'Sim',
  })
  isAdmin:string;

}
