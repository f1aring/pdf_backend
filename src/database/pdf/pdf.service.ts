import { Injectable, Inject } from '@nestjs/common';
import { Pdf } from './pdf.model';
@Injectable()
export class PdfService {

    constructor(
        @Inject('PDF_REPOSITORY')
        private pdfRepository: typeof Pdf
    ) { }
   
}
