import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() data: any) {
    return this.documentsService.create(data);
  }

  @Get('findAllSendedDocs/:id')
  findAllSendedDocs(@Param('id') id: number) {
    return this.documentsService.findAllSendedDocs(id);
  }

  @Get('findAllReceivedDocs/:id')
  findAllReceivedDocs(@Param('id') id: number) {
    return this.documentsService.findAllReceivedDocs(id);
  }

  @Get('findOneByCaseId/:id')
  findOneByCaseId(@Param('id') id: number) {
    return this.documentsService.findOneByCaseId(id);
  }

  @Post('updateDocs')
  update(@Body() data: any ) {
    return this.documentsService.update(data);
  }

  @Post('sendDocument')
  sendDocument(@Body() data: any){
     return this.documentsService.sendDocument(data)
  }

  @Post('acknowledgeDocument')
  acknowledgeDocument(@Body() data: any){
     return this.documentsService.acknowledgeDocument(data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentsService.remove(+id);
  }
}
