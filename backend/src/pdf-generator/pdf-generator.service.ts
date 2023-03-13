import { Injectable } from '@nestjs/common';
const hbs = require('handlebars');
const path = require('path');
const puppeteer = require('puppeteer');
const fs = require('fs-extra')
const moment = require('moment');

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

@Injectable()
export class PdfGeneratorService {

    async compile(templatename, data) {
        const filepath = path.join(process.cwd(), 'src/pdf-generator/template', `${templatename}.hbs`);
        const html = await fs.readFile(filepath, 'utf-8');
        return hbs.compile(html)(data);
    }

    async printReport(data: any){

        const datas = [{
            institute: data[0].institute,
            report: data[0].generatedData
        }]
        
        try {
            
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
      
            const content = await this.compile("pdf-file", datas)
            // console.log(data)
            await page.setContent(content);
            // await page.emulateMedia('screen');
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
            await browser.close()
            return buffer;
      
          } catch (e) {
            console.log(e)
          }
    }

    async printConsolidatedReport(data: any){

      const datas = [{
          report: data,
          institute: data[0].instituteReport,
          size: data[0].instituteReport.length * 2
      }]

      try {
          
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
    
          const content = await this.compile("pdf-file-consolidated", datas)
          // console.log(data)
          await page.setContent(content);
          // await page.emulateMedia('screen');
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
          await browser.close()
          return buffer;
    
        } catch (e) {
          console.log(e)
        }
  }
    
}
