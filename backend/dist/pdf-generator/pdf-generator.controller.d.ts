import { PdfGeneratorService } from './pdf-generator.service';
export declare class PdfGeneratorController {
    private readonly pdfGeneratorService;
    constructor(pdfGeneratorService: PdfGeneratorService);
    printReport(res: any, data: any): Promise<void>;
    printConsolidatedReport(res: any, data: any): Promise<void>;
}
