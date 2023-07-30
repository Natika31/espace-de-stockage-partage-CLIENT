import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MyFile } from './MyFile';
import { FileService } from './file.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    PdfViewerModule,
  ],
})
export class FileViewerComponent implements OnInit {
  //TODO: gérer les différents formats possibles

  @Input() displayedFile: MyFile = {
    file_id: 0,
    file_name: 'FileViewerComponent > pas de fichier sélectionné',
    binary_content: '',
  };

  pdfSrc = '';
  displayPdf(base64: string) {
    const byteArray = new Uint8Array(
      atob(base64)
        .split('')
        .map((char) => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfSrc = fileURL;
  }

  constructor(private fileService: FileService) {}
  displayFile(): void {
    const file_id = this.displayedFile.file_id;
    this.fileService.getFileById(file_id).subscribe((file) => {
      this.displayedFile = file;
      this.displayPdf(this.displayedFile.binary_content);
    });
  }

  ngOnInit(): void {
    this.displayFile();
  }
}
