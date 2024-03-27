import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PdfModule } from './database/pdf/pdf.module';

@Module({
  imports: [DatabaseModule, PdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
