import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Directory } from './Directory';
import { DirectoryService } from './directory.service';
import { CommonModule } from '@angular/common';

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
    directory_name: 'DirectoryViewerComponent > Nom du répertoire',
    directory_local_path: '/',
  };

  constructor(private directoryService: DirectoryService) {}

  getDirectory(): void {
    const directory_id = this.currentDirectory.directory_id;
    this.directoryService
      .getDirectoryById(directory_id)
      .subscribe((directory) => (this.currentDirectory = directory));
  }

  ngOnInit(): void {
    this.getDirectory();
  }
}
