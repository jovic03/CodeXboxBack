import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { Usuario } from 'src/usuario/entities/usuario.entity';


@ApiTags('genero')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genero')
export class GeneroController {

  constructor(private readonly generoService: GeneroService) {}

  @Get()
  @ApiOperation({
    summary:'Lista todos generos'
  })
  findAll(): Promise<Genero[]> {
    return this.generoService.findAll();
  }


  @Get(':id')
  @ApiOperation({
    summary:'Ver um genero'
  })
  findOne(@Param('id') id:string):Promise<Genero>{
    return this.generoService.findOne(id);
  }


  @Post()
  @ApiOperation({
    summary:'Criar um genero'
  })
  create( @LoggedUser() user: Usuario , @Body() createGeneroDto: CreateGeneroDto):Promise<Genero> {
    return this.generoService.create(user,createGeneroDto);
  }


  @Patch(':id')
  @ApiOperation({
    summary:'Editar um genero pelo ID'
  })
  update(@LoggedUser() user: Usuario ,@Param('id')id:string, @Body() dto:UpdateGeneroDto): Promise<Genero>{
    return this.generoService.update(user,id,dto)
  }


  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:'Deletar um genero pelo ID'
  })
  delete(@LoggedUser() user: Usuario ,@Param('id') id:string){
    this.generoService.delete(user,id);//nao tem return pq só precisamos que a operacao seja feita
  }

}
