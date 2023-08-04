import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Directory } from './Directory';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private directoryUrl = HttpClientHelper.baseURL + 'directory';
  constructor(private http: HttpClient) {}

  getDirectoryById(directory_id: number): Observable<Directory> {
    const url = `${this.directoryUrl}?directory_id=${directory_id}`;
    return this.http.get<Directory>(url);
  }
}
