import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper';
import { myRecipient } from './myRecipient';
import { myGroup } from './myGroup';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  private itemUrl = HttpClientHelper.baseURL;
  constructor(private http: HttpClient) {}

  getRecipientById(recipient_id: string): Observable<myRecipient> {
    const url = `${this.itemUrl}recipient?recipient_id=${recipient_id}`;
    return this.http.get<myRecipient>(url);
  }

  getRecipients(): Observable<Array<myRecipient>> {
    const url = `recipients`;
    return this.http.get<myRecipient[]>(url);
  }

  getGroups(): Observable<Array<myGroup>> {
    const url = `${this.itemUrl}groups`;
    return this.http.get<myGroup[]>(url);
  }
}
