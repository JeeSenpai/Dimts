import { Controller, Get, Post, Body, Patch, Param, Request, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesHelper } from 'src/shared/helper';


@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}


  @Get('citizenLogin/:username/:password')
  citizenLogin(@Param('username') username: any, @Param('password') password: any){
    return this.citizenService.login(username, password)
  }

  @Post('citizenSignup')
  @UseInterceptors(
  FilesInterceptor('files',1, {
      storage: diskStorage({
        destination: FilesHelper.destinationPath,
        filename: FilesHelper.customFileName,
      }),
  })
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File> , @Request() req) {
    const filesArray = files
    const body = JSON.parse(req.body.body)
  }

  @Get()
  findAll() {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizenService.update(+id, updateCitizenDto);
  }

}
