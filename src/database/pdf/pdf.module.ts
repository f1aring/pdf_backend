import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { DatabaseModule } from '../database.module';
import { pdfProviders } from './pdf.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [PdfController],
  providers: [PdfService, ...pdfProviders]
})
export class PdfModule {}
