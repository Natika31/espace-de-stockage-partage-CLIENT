import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../file-tree/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class SearchComponent {
  searchedItem: Item = {
    item_id: '0',
    item_local_path: '.',
    name: '',
    item_type: 'item',
    children: [],
  };

  @Output() clickSearch = new EventEmitter<string>();

  onClickSearch(): void {
    this.clickSearch.emit(this.searchedItem.name);
  }
}
