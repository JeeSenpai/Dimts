import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private readonly pdfGeneratorService: PdfGeneratorService) {}

  @Post('printReport')
  async printReport(@Res() res,@Body() data: any ): Promise<void> {
    const buffer = await this.pdfGeneratorService.printReport(data);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=example.pdf',
      'Content-Length': buffer.length,

      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0,
    })

    res.end(buffer)

  }

  @Post('printConsolidatedReport')
  async printConsolidatedReport(@Res() res,@Body() data: any ): Promise<void> {
    const buffer = await this.pdfGeneratorService.printConsolidatedReport(data);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=example.pdf',
      'Content-Length': buffer.length,

      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0,
    })

    res.end(buffer)

  }
}
