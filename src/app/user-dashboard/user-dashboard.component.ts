import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { MyFile } from '../file-viewer/MyFile';
import { DirectoryViewerComponent } from '../directory-viewer/directory-viewer.component';
import { Directory } from '../directory-viewer/Directory';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  standalone: true,
  imports: [MatTabsModule, FileViewerComponent, DirectoryViewerComponent],
})
export class UserDashboardComponent {
  //TODO: create parent directory and display contents
  selectedFile: MyFile = {
    file_id: 1,
    file_name: 'Titre',
    binary_content: '',
  };

  selectedDirectory: Directory = {
    directory_id: 1,
    directory_name: 'Nom du répertoire',
    directory_local_path: '/',
  };
}
