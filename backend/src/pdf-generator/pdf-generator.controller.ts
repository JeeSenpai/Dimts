import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private readonly pdfGeneratorService: PdfGeneratorService) {}

  @Post('printReport')
  async printReport(@Res() res ,@Body() data: any ): Promise<void> {
    const buffer = await this.pdfGeneratorService.printReport(data);
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename="output.pdf"');
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=example.pdf',
      'Content-Length': buffer.length,

      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0,
    })

    console.log(buffer)

    res.end(buffer)
  }
}
