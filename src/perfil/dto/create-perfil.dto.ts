import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { CreateJogoFavoritoDto } from './create-perfil-favorito.dto';

export class CreatePerfilDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de perfil. Utilizado no login. Deve ser único',
    example: 'paulosalvatore',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example:
      'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=',
  })
  ImageURL: string;

  @IsString()
  @ApiProperty({
    description: 'ID de jogos',
    example:['ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb','ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb'],
  })
  jogoIds: string[];

  @IsString()
  @ApiProperty({
    description: 'ID de usuario',
    example:'0397c13f-483b-475e-bd58-a7df84cdbea0' ,
  })
  userId: string;

  //implementacao de favorito
  /*@ValidateNested({
    each:true,
  })
  @Type(()=>CreateJogoFavoritoDto)
  @ApiProperty({
    description: 'Lista com os IDs dos jogos',
    type:[CreateJogoFavoritoDto]
  })
  jogos: CreateJogoFavoritoDto[];*/
}
