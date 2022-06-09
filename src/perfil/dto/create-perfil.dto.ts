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
    example:'ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb',
  })
  jogoIds: string;


  @IsString()
  @ApiProperty({
    description: 'ID de usuario',
    example:'0397c13f-483b-475e-bd58-a7df84cdbea0' ,
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
