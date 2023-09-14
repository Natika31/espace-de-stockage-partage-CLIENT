import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { FileTreeComponent } from '../file-tree/file-tree.component';
import { CommonModule } from '@angular/common';
import { Item } from '../file-tree/Item';
import { RecipientListComponent } from '../recipient-list/recipient-list.component';
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
    RecipientListComponent,
  ],
})
export class UserDashboardComponent {
  @Input() currentItem: Item = {
    item_id: '0',
    item_local_path: './home',
    name: 'home',
    item_type: 'folder',
    children: [],
  };

  onClickItem(selectedItem: Item) {
    this.currentItem = selectedItem;
  }

  onCloseFileViewer(item: Item) {
    this.currentItem = item;
  }
}
