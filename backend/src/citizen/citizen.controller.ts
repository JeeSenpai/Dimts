import { Controller, Get, Post, Body, Patch, Param, Request, Delete,Response, UseInterceptors, UploadedFiles, StreamableFile } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesHelper } from 'src/shared/helper';
import { ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs-extra';
import { join } from 'path';

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

  @Post('updateCitizenByCitizen')
  updateCitizenByCitizen(@Body() data: any){
    return this.citizenService.updateCitizenByCitizen(data)
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
    const data = JSON.parse(req.body.data)
    return this.citizenService.create(filesArray,data)
  }

  @Get()
  findAll() {
    return this.citizenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.citizenService.findOne(id);
  }

  @Get('stream-image/:imageName')
  getImage(@Param('imageName') imageName: string, @Response({passthrough: true}) res): StreamableFile{

   //  const file = createReadStream(join(process.cwd(), '../dist/compliances/' + imageName));
    const file = createReadStream('images/' + imageName);
    res.set({
       'Content-Type' : 'image/webp',
       'Content-Disposition': 'inline: filename=test.pdf'
    })
    file.on('error', (err) => {console.log(err)});

    return new StreamableFile(file);
  }

}
