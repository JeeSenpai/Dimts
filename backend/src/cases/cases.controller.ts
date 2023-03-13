import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  create(@Body() data: any) {
    return this.casesService.create(data);
  }

  @Get()
  findAll() {
    return this.casesService.findAll();
  }

  @Get('getProceedings/:id')
  findOneCaseWithProceedings( @Param('id') id: number ){
    return this.casesService.findOneCaseWithProceedings(id)
  }

  @Get('proceedings')
  findCaseWithProceedings(){
    return this.casesService.findCaseWithProceedings()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casesService.findOne(+id);
  }

  @Patch()
  update(@Body() data: any) {
    return this.casesService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.casesService.remove(+id);
  }
}
