import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { MyFile } from '../file-viewer/MyFile';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  standalone: true,
  imports: [MatTabsModule, FileViewerComponent],
})
export class UserDashboardComponent {
  //TODO: create parent directory and display contents
  selectedFile: MyFile = {
    file_id: 1,
    file_name: 'Titre',
    file_format: '',
    file_path: '/',
    file_content: '',
  };
}
