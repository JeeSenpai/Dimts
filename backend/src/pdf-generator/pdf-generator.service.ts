import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
const hbs = require('handlebars');
const path = require('path');
const fs = require('fs-extra');
import moment from 'moment';

hbs.registerHelper("dateFormat", function (value) {
  if(value == 'N/A'){
    return 'N/A'
  }else{
    return moment(value).format("MMMM D, YYYY");
  }
})

hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

hbs.registerHelper("mname", function(value, options)
{
    return value[0];
});

@Injectable()
export class PdfGeneratorService {

    async compile(templatename: any, data: any) {
        const filepath = path.join(process.cwd(), 'src/pdf-generator/template', `${templatename}.hbs`);
        //const filepath = path.join(process.cwd(), 'dist/pdf-generator/template', `${templatename}.hbs`);
        const html = await fs.readFile(filepath, 'utf-8');
        const compile = hbs.compile(html)(data);
        return compile
    }

    async printReport(data: any): Promise<Buffer>{

        const datas = [{
            institute: 'qwrwqr',
        }]
        
        try {
          const browser = await puppeteer.launch({ headless: true });
          const page = await browser.newPage();
          const content = await this.compile("pdf-file", data); // Use 'datas' instead of 'data'
          await page.setContent(content);
          const buffer = await page.pdf({
            format: 'A4',
            margin: {
              top: '0.39in',
              left: '0.39in',
              bottom: '0.38in',
              right: '0.38in',
            },
            printBackground: true,
          });
          await browser.close();
          return buffer;
        } catch (e) {
          console.log(e);
        }
    }
    
}


