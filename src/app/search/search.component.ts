import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../file-tree/Item';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor } from '@angular/common';
import jp from 'jsonpath';

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
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
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
  myControl = new FormControl('');

  options: string[] = [
    'home',
    'Natacha',
    'Henri Salvador',
    'Dans mon ile',
    'The Beatles',
    'Jack',
    'Johnny',
  ];
  //options = jp.query(this.root, '$.[*].name');

  @Output() clickSearch = new EventEmitter<Item>();

  onClickSearch(): void {
    this.clickSearch.emit(this.searchedItem);
  }
}
