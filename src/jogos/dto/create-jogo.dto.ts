import { IsString,isEmpty, IsEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateJogoDto {

  //****testar com video de prof se is validators estao funcionando****
  atencaoaoerro:syabjshdba;

  @IsString()
  @IsEmpty()
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
