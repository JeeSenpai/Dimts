import { Controller, Get, Post, Body, Patch, Param, Request, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesHelper } from 'src/shared/helper';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Citizen')
@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}


  @Post('citizenLogin/:username/:password')
  citizenLogin(@Param('username') username: string, @Param('password') password: string){
    return this.citizenService.login(username, password)
  }

  @Post('createCitizenByAdmin')
  createCitizenByAdmin(@Body() data: any){
    return this.citizenService.createCitizenByAdmin(data)
  }

  @Post('updateCitizenByAdmin')
  updateCitizenByAdmin(@Body() data: any){
    return this.citizenService.updateCitizenByAdmin(data)
  }

  @Post('citizenSignup')
  @UseInterceptors(
  FilesInterceptor('files',1,{
      storage: diskStorage({
        destination: FilesHelper.destinationPath,
        filename: FilesHelper.customFileName,
      }),
  })
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File> , @Request() req) {
    const filesArray = files
    const body = JSON.parse(req.body.body)
    return this.citizenService.create(filesArray,body)
  }

  @Get()
  findAll() {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenService.findOne(+id);
  }

}
