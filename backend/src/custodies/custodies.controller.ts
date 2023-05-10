import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustodiesService } from './custodies.service';
import { CreateCustodyDto } from './dto/create-custody.dto';
import { UpdateCustodyDto } from './dto/update-custody.dto';

@Controller('custodies')
export class CustodiesController {
  constructor(private readonly custodiesService: CustodiesService) {}

  @Post()
  create(@Body() data:any) {
    return this.custodiesService.create(data);
  }

  @Get()
  findAll() {
    return this.custodiesService.findAll();
  }

  @Get('findAllCustodyById/:id')
  findAllCustodyById(@Param('id') id: any) {
    return this.custodiesService.findAllCustodyById(id);
  }

  @Post('updateCustody')
  update(@Body() data:any) {
    return this.custodiesService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.custodiesService.remove(+id);
  }
}
