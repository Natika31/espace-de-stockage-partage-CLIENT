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
  //le fichier sélectionné dont on veut visualiser le contenu
  fileToDisplay: MyFile = {
    file_id: 0,
    file_name: 'Titre par défaut',
    binary_content: '',
  };
  //le répertoire courant dont le contenu est visualisé
  openedDirectory: Directory = {
    directory_id: 2,
    directory_name: 'Nom du répertoire',
    directory_local_path: '/home/nom_du_repertoire',
    childrenDTO: [],
  };

  displayFile(file: MyFile): void {
    this.fileToDisplay = file;
  }
}
