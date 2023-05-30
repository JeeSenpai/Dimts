import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cases')
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

  @Get('findAllActiveCasesClusters')
  findAllActiveCasesClusters(){
    return this.casesService.findAllActiveCasesClusters();
  }

  @Get('findAllDocketCasesClusters')
  findAllDocketCasesClusters(){
    return this.casesService.findAllDocketCasesClusters();
  }

  @Get('findAllActive')
  findAllActive() {
    return this.casesService.findAllActive();
  }

  @Get('findAllDocket')
  findAllDocket() {
    return this.casesService.findAllDocket();
  }

  @Get('getProceedings/:id')
  findOneCaseWithProceedings( @Param('id') id: number ){
    return this.casesService.findOneCaseWithProceedings(id)
  }
  
  @Get('findOneCaseWithProceedingsInMobile/:caseId')
  findOneCaseWithProceedingsInMobile(@Param('caseId') id: number ){
    return this.casesService.findOneCaseWithProceedingsInMobile(id)
  }

  @Get('proceedings')
  findCaseWithProceedings(){
    return this.casesService.findCaseWithProceedings()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.casesService.findOne(id);
  }

  @Get('countCasesByCaseType/:id')
  countCasesByCaseType(@Param('id') id: number){
    return this.casesService.countCasesByCaseType(id)
  }

  @Get('countDocketCase/:id')
  countDocketCase(@Param('id') id: number){
    return this.casesService.countDocketCase(id)
  }

  @Get('countCases/:id')
  countCases(@Param('id') id: number){
    return this.casesService.countCases(id)
  }

  @Post('update')
  update(@Body() data: any) {
    return this.casesService.update(data);
  }

  @Post('updateCaseStatusToTrue')
  updateCaseStatusToTrue(@Body() data: any ){
     return this.casesService.updateCaseStatusToTrue(data)
  }

  @Post('updateCaseStatusToFalse')
  updateCaseStatusToFalse(@Body() data: any ){
     return this.casesService.updateCaseStatusToFalse(data)
  }

  @Delete('delete/:caseNo')
  deleteAllCases(@Param('caseNo') caseNo: string){
     return this.casesService.deleteAllCases(caseNo)
  }
}
