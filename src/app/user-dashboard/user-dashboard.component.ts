import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { FileTreeComponent } from '../file-tree/file-tree.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  standalone: true,
  imports: [
    MatTabsModule,
    FileViewerComponent,
    FileTreeComponent,
    CommonModule,
  ],
})
export class UserDashboardComponent {}
