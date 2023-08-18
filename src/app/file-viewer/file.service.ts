import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FileItem } from './FileItem';
import { HttpClientHelper } from '../../helpers/HttpClientHelper';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private fileUrl = HttpClientHelper.baseURL + 'file'; // URL to web api

  constructor(private http: HttpClient) {}

  getFileById(file_id: string): Observable<FileItem> {
    const url = `${this.fileUrl}?file_id=${file_id}`;
    return this.http.get<FileItem>(url);
  }
}
