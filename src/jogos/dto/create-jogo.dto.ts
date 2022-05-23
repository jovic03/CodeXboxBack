import { IsString, IsEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateJogoDto {

  @IsString()
  //@IsEmpty()
  @ApiProperty({
    description: 'O nome do jogo é',
    example: 'Sniper Elite',
  })
  Title :string;
  CoverImageUrl:string;
  Description:string;
  Year:string;
  ImdbScore:string
  TrailerYouTubeUrl:string;
  GameplayYouTubeUrl:string;
}
