"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const hbs = require('handlebars');
const path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const moment = require('moment');
hbs.registerHelper("dateFormat", function (value) {
    if (value == 'N/A') {
        return 'N/A';
    }
    else {
        return moment(value).format("MMMM D, YYYY");
    }
});
hbs.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});
let PdfGeneratorService = class PdfGeneratorService {
    async compile(templatename, data) {
        const filepath = path.join(process.cwd(), 'src/pdf-generator/template', `${templatename}.hbs`);
        const html = await fs.readFile(filepath, 'utf-8');
        return hbs.compile(html)(data);
    }
    async printReport(data) {
        const datas = [{
                institute: data[0].institute,
                report: data[0].generatedData
            }];
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const content = await this.compile("pdf-file", datas);
            await page.setContent(content);
            const buffer = await page.pdf({
                format: 'A4',
                margin: {
                    top: '0.39in',
                    left: '0.39in',
                    bottom: '0.38in',
                    right: '0.38in',
                },
                printBackground: true
            });
            await browser.close();
            return buffer;
        }
        catch (e) {
            console.log(e);
        }
    }
    async printConsolidatedReport(data) {
        const datas = [{
                report: data,
                institute: data[0].instituteReport,
                size: data[0].instituteReport.length * 2
            }];
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const content = await this.compile("pdf-file-consolidated", datas);
            await page.setContent(content);
            const buffer = await page.pdf({
                format: 'Legal',
                landscape: true,
                margin: {
                    top: '0.05in',
                    left: '0.25in',
                    bottom: '0.10in',
                    right: '0.25in',
                },
                printBackground: true
            });
            await browser.close();
            return buffer;
        }
        catch (e) {
            console.log(e);
        }
    }
};
PdfGeneratorService = __decorate([
    (0, common_1.Injectable)()
], PdfGeneratorService);
exports.PdfGeneratorService = PdfGeneratorService;
//# sourceMappingURL=pdf-generator.service.js.map