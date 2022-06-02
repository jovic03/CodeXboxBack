import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary:'Ver status da aplicação'
  })
  getAppStatus(@Req() req: Request) {

    const baseUrl = req.protocol + '://'+req.get('host')

    return this.appService.getAppStatus(baseUrl);
  }
}
