import { IsString, IsEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeneroDto {

  @IsString()
  @IsEmpty()
  @ApiProperty({
    description: 'Genero: ',
    example: 'FPS',
  })
  Genero :string;
}
