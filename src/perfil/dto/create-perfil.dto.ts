import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, ValidateNested} from 'class-validator';
import {Type} from "class-transformer";
import {CreateJogoFavoritoDto} from "./create-perfil-favorito.dto";


export class CreatePerfilDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de perfil. Utilizado no login. Deve ser único',
    example: 'Perfil1',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example:
      'https://www.seekpng.com/png/full/966-9665493_my-profile-icon-blank-profile-image-circle.png',
  })
  ImageURL: string;

  @IsString()
  @ApiProperty({
    description: 'ID de jogos',
    example:'04f1f8e9-3a88-4e7a-a9d6-07ff3ecc8069',
  })
  jogoIds: string;


  @IsString()
  @ApiProperty({
    description: 'ID de usuario',
    example:'2c662b25-c07d-4e92-ad31-6ccc1ccf22e0' ,
  })
  userId: string;

  // implementacao de favorito
  @ValidateNested({
    each:true,
  })
  @Type(()=>CreateJogoFavoritoDto)
  @ApiProperty({
    description: 'Lista com os IDs dos jogos',
    type:[CreateJogoFavoritoDto]
  })
  jogosFavoritos: CreateJogoFavoritoDto[];

}
