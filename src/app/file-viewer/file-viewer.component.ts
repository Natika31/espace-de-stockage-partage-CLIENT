import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FileItem } from './FileItem';
import { FileService } from './file.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Item } from '../file-tree/Item';
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
  @Input() currentFileId: string = '0';

  @Output() isClosed = new EventEmitter<Item>();

  currentFile: FileItem = {
    binary_content: '',
    item_id: '0',
    item_local_path: './displayedFile.pdf',
    name: 'displayedFile',
    item_type: '',
    children: [],
  };

  //TODO: gérer les différents formats possibles
  pdfSrc = '';

  constructor(private fileService: FileService) {}

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

  getFile(): void {
    const file_id = this.currentFileId;
    this.fileService.getFileById(file_id).subscribe((file) => {
      this.currentFile = file;
      this.displayPdf(this.currentFile.binary_content);
    });
  }

  onClose() {
    this.currentFile = {
      binary_content: '',
      item_id: '0',
      item_local_path: './displayedFile.pdf',
      name: 'displayedFile',
      item_type: '',
      children: [],
    };
    this.isClosed.emit(this.currentFile);
  }

  ngOnInit(): void {
    this.getFile();
  }
}
