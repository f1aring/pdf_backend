import { Controller, Get, Post, Body, UploadedFiles ,UseInterceptors, Bind } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { IPdf } from './pdf.interface';
import { FilesInterceptor } from '@nestjs/platform-express';
import {convertPDFBufferToImagesAndUpload} from './pdf.middleware'
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  async getPdf(): Promise<any> {
    return await this.pdfService.findAll();
  }

@Post('upload')
@UseInterceptors(FilesInterceptor('files'))
@Bind(UploadedFiles())
    async uploadFile(files) {

const pdf1 = await convertPDFBufferToImagesAndUpload(files[1].buffer);// this gives the array with the image link
console.log(pdf1);
}


  @Post()
  async postPdf(@Body() body: IPdf): Promise<IPdf> {
    await this.pdfService.postPdf(body);
    return body;
  }
}
