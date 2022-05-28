import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";


export class CreateFavoritoDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está favoritando',
    example: '0397c13f-483b-475e-bd58-a7df84cdbea0',
  })
  perfilId: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID do jogo que está favoritado',
    example: 'ca5eecec-d709-4f9c-9fa0-3384f6c8c3bb',
  })
  jogoId: string;
}
