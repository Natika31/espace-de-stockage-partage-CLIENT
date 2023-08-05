import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { MyFile } from '../file-viewer/MyFile';
import { DirectoryViewerComponent } from '../directory-viewer/directory-viewer.component';
import { Directory } from '../directory-viewer/Directory';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  standalone: true,
  imports: [
    MatTabsModule,
    FileViewerComponent,
    DirectoryViewerComponent,
    CommonModule,
  ],
})
export class UserDashboardComponent {
  //TODO: create parent directory and display contents
  fileToDisplay: MyFile = {
    file_id: 0,
    file_name: 'Titre par défaut',
    binary_content: '',
  };

  selectedDirectory: Directory = {
    directory_id: 2,
    directory_name: 'Nom du répertoire',
    directory_local_path: '/',
    childrenDTO: [
      {
        file_id: 0,
        file_name: 'Titre',
        binary_content: '',
      },
    ],
  };

  displayFile(file: MyFile): void {
    this.fileToDisplay = file;
  }
}
