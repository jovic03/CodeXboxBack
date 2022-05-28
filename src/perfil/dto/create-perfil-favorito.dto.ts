import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateJogoFavoritoDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do jogo',
    example: 'ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb',
  })
  jogoId: string;


  @IsString()
  @ApiProperty({
    description: 'Nome do Jogo',
    example: 'Bioshock',
  })
  nomeJogo: string;
}