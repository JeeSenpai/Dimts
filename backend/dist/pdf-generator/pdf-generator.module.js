"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfGeneratorModule = void 0;
const common_1 = require("@nestjs/common");
const pdf_generator_service_1 = require("./pdf-generator.service");
const pdf_generator_controller_1 = require("./pdf-generator.controller");
let PdfGeneratorModule = class PdfGeneratorModule {
};
PdfGeneratorModule = __decorate([
    (0, common_1.Module)({
        controllers: [pdf_generator_controller_1.PdfGeneratorController],
        providers: [pdf_generator_service_1.PdfGeneratorService]
    })
], PdfGeneratorModule);
exports.PdfGeneratorModule = PdfGeneratorModule;
//# sourceMappingURL=pdf-generator.module.js.map