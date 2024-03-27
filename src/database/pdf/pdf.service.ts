import { Injectable, Inject } from '@nestjs/common';
import { Pdf } from './pdf.model';
import { IPdf } from './pdf.interface';
@Injectable()
export class PdfService {

    constructor(
        @Inject('PDF_REPOSITORY')
        private pdfRepository: typeof Pdf
    ) { }

    async findAll() {
        return await this.pdfRepository.findAll();
    }


    async postPdf(body: IPdf): Promise<IPdf> {

        return await this.pdfRepository.create(body);
        
    }
   
}
