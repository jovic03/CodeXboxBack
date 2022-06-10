import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Genero } from "src/genero/entities/genero.entity";


export class CreateJogoDto {

  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Jogo Nome',
  })
  title :string;

  @IsString()
  @ApiProperty({
    description: 'Capa do jogo',
    example: 'www.imagemdobioshock.com',
  })
  coverImageUrl:string;
  @IsString()
  @ApiProperty({
    description: 'Descricao do jogo',
    example: 'Descricao do jogo',
  })
  description:string;

  @IsString()
  @ApiProperty({
    description: 'Ano de lancamento do jogo',
    example: '2007',
  })
  year:string;

  @IsString()
  @ApiProperty({
    description: 'Nota do IMDB de 0 à 5',
    example: '5',
  })
  imdbScore:string

  @IsString()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: 'https://www.youtube.com/watch?v=nqqZwoqCwXU',
  })
  trailerYouTubeUrl:string;

  @IsString()
  @ApiProperty({
    description: 'Gameplay do jogo SaaS',
    example: 'https://www.youtube.com/watch?v=Yyz4NYpt8v4',
  })
  gameplayYouTubeUrl:string;

  @IsString()
  @ApiProperty({
    description: 'Genero',
    example:'FPS' ,
  })
  genero: Genero[];


}
