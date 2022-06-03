import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeneroDto {

  @IsString()
  @ApiProperty({
    description: 'Genero: ',
    example: 'FPS',
  })
  genero :string;
}
