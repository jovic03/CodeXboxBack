import { IsString, IsEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeneroDto {

  //****testar is validators estao funcionando****

  @IsString()
  @IsEmpty()
  @ApiProperty({
    description: 'Genero: ',
    example: 'FPS',
  })
  Genero :string;
}
