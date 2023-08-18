import { Injectable } from '@angular/core';
import { Item } from './Item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper';

@Injectable({
  providedIn: 'root',
})
export class FileTreeService {
  private itemUrl = HttpClientHelper.baseURL + 'file-tree';
  constructor(private http: HttpClient) {}

  getItemById(item_id: string): Observable<Item> {
    const url = `${this.itemUrl}?item_id=${item_id}`;
    return this.http.get<Item>(url);
  }
}
