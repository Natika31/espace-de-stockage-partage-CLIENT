import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyFile } from './MyFile';
import { HttpClientHelper } from '../../helpers/HttpClientHelper';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private fileUrl = HttpClientHelper.baseURL + 'file'; // URL to web api

  constructor(private http: HttpClient) {}

  getFileById(file_id: number): Observable<MyFile> {
    const url = `${this.fileUrl}?file_id=${file_id}`;
    return this.http.get<MyFile>(url);
  }
}
