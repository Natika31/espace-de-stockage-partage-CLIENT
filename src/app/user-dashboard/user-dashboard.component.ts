import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileViewerComponent } from '../file-viewer/file-viewer.component';
import { FileTreeComponent } from '../file-tree/file-tree.component';
import { CommonModule } from '@angular/common';
import { Item } from '../file-tree/Item';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  standalone: true,
  imports: [
    MatTabsModule,
    FileViewerComponent,
    FileTreeComponent,
    SearchComponent,
    CommonModule,
  ],
})
export class UserDashboardComponent {
  currentItem: Item = {
    item_id: '0',
    item_local_path: '.',
    name: 'currentItem',
    item_type: 'item',
    children: [],
  };

  onSelectFileTreeItem(selectedItem: Item) {
    this.currentItem = selectedItem;
  }

  onCloseFileViewer(item: Item) {
    this.currentItem = item;
  }
}
