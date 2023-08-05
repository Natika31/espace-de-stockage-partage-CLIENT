import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Directory } from './Directory';
import { DirectoryService } from './directory.service';
import { CommonModule } from '@angular/common';
import { MyFile } from '../file-viewer/MyFile';

@Component({
  selector: 'app-directory-viewer',
  templateUrl: './directory-viewer.component.html',
  styleUrls: ['./directory-viewer.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    CommonModule,
  ],
})
export class DirectoryViewerComponent implements OnInit {
  @Input() currentDirectory: Directory = {
    directory_id: 2,
    directory_name: 'Nom du répertoire',
    directory_local_path: '/chemin/local/nom_du_repertoire',
    childrenDTO: [
      {
        file_id: 1,
        file_name: 'Nom du fichier',
        binary_content: '',
      },
    ],
  };

  @Output() selectedFile = new EventEmitter<MyFile>();

  fileToDisplay: MyFile = {
    file_id: 0,
    file_name: 'Nom du fichier',
    binary_content: '',
  };

  constructor(private directoryService: DirectoryService) {}
  onSelect(file: MyFile): void {
    this.fileToDisplay = file;
  }

  getDirectory(): void {
    const directory_id = this.currentDirectory.directory_id;
    this.directoryService
      .getDirectoryById(directory_id)
      .subscribe((directory) => {
        this.currentDirectory = directory;
      });
  }

  displaySelectedFile(): void {
    this.selectedFile.emit(this.fileToDisplay);
  }

  ngOnInit(): void {
    this.getDirectory();
  }
}
