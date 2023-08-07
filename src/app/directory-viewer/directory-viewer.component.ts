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
  //répertoire courant dont le contenu est visualisé
  @Input() currentDirectory: Directory = {
    directory_id: 2,
    directory_name: 'Nom du répertoire',
    directory_local_path: '/chemin/local/nom_du_repertoire',
    childrenDTO: [],
  };

  //fichier sélectionné dont le contenu doit être affiché
  fileToDisplay: MyFile = {
    file_id: 0,
    file_name: 'Nom du fichier',
    binary_content: '',
  };

  //Evenement "fichier sélectionné" permettant de transmettre les données du fichier sélectionné au composant parent UserDashboardComponent
  @Output() selectedFile = new EventEmitter<MyFile>();

  constructor(private directoryService: DirectoryService) {}

  /**
   * Quand sélection d'un fichier, affectation des données du fichier sélectionné au fichier à afficher
   * @param file
   */
  onSelect(file: MyFile): void {
    this.fileToDisplay = file;
  }
  /**
   * Quand clic sur le bouton "afficher" et un fichier sélectionné,
   * émission d'un évenement avec les données du fichier à afficher
   * à destination du composant parent (abonné UserDashboardComponent)
   */
  displaySelectedFile(): void {
    this.selectedFile.emit(this.fileToDisplay);
  }

  /**
   * Les données du répertoire courant sont récupérées depuis les serveur par l'intermédiaire d'un service
   */
  getDirectory(): void {
    const directory_id = this.currentDirectory.directory_id;
    this.directoryService
      .getDirectoryById(directory_id)
      .subscribe((directory) => {
        this.currentDirectory = directory;
      });
  }

  /**
   * à l'initialisation du composant, les données du répertoire courant sont récupérées
   */
  ngOnInit(): void {
    this.getDirectory();
  }
}
