import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MyFile } from './MyFile';
import { FileService } from './file.service';
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
  ],
})
export class FileViewerComponent implements OnInit {
  //TODO: gérer les différents formats possibles
  //TODO: récupérer l'image du fichier
  @Input() displayedFile: MyFile = {
    file_id: 0,
    file_name: 'pas de fichier sélectionné',
    file_format: '',
    file_path: '/',
  };

  constructor(private fileService: FileService) {}

  displayFile(): void {
    const file_id = this.displayedFile.file_id;
    this.fileService.getFileById(file_id).subscribe((file) => {
      this.displayedFile = file;
    });
  }

  ngOnInit(): void {
    this.displayFile();
  }
}
