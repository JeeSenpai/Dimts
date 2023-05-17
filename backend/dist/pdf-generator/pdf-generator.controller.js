"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfGeneratorController = void 0;
const common_1 = require("@nestjs/common");
const pdf_generator_service_1 = require("./pdf-generator.service");
let PdfGeneratorController = class PdfGeneratorController {
    constructor(pdfGeneratorService) {
        this.pdfGeneratorService = pdfGeneratorService;
    }
    async printReport(res, data) {
        const buffer = await this.pdfGeneratorService.printReport(data);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename=example.pdf',
            'Content-Length': buffer.length,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': 0,
        });
        res.end(buffer);
    }
    async printConsolidatedReport(res, data) {
        const buffer = await this.pdfGeneratorService.printConsolidatedReport(data);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename=example.pdf',
            'Content-Length': buffer.length,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': 0,
        });
        res.end(buffer);
    }
};
__decorate([
    (0, common_1.Post)('printReport'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PdfGeneratorController.prototype, "printReport", null);
__decorate([
    (0, common_1.Post)('printConsolidatedReport'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PdfGeneratorController.prototype, "printConsolidatedReport", null);
PdfGeneratorController = __decorate([
    (0, common_1.Controller)('pdf-generator'),
    __metadata("design:paramtypes", [pdf_generator_service_1.PdfGeneratorService])
], PdfGeneratorController);
exports.PdfGeneratorController = PdfGeneratorController;
//# sourceMappingURL=pdf-generator.controller.js.map