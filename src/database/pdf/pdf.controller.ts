import { Controller, Get, Post, Body, UploadedFiles ,UseInterceptors, Bind } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { IPdf } from './pdf.interface';
import { Express } from 'express'
import { FilesInterceptor } from '@nestjs/platform-express';
import {convertPDFBufferToImagesAndUpload} from './pdf.cloudinary'
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  async getPdf(): Promise<any> {
    return await this.pdfService.findAll();
  }
//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
  
//    uploadFile(@UploadedFile() file: Express.Multer.File) {
//      console.log(file);
//    }
@Post('upload')
@UseInterceptors(FilesInterceptor('files'))
@Bind(UploadedFiles())
    async uploadFile(files) {
//   console.log(files[0].buffer);
//   console.log(files[1].buffer);
const pdf1 = await convertPDFBufferToImagesAndUpload(files[1].buffer);
console.log(pdf1);
}


//    @Post('upload')
//    @UseInterceptors(FilesInterceptor('files')) // Use FilesInterceptor for multiple files
//    uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
//      console.log(files);
//      // Handle the uploaded files as needed
//    }

  @Post()
  async postPdf(@Body() body: IPdf): Promise<IPdf> {
    await this.pdfService.postPdf(body);
    return body;
  }
}
