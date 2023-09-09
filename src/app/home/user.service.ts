import { Injectable } from '@angular/core';
import { myUser } from './myUser';
import { HttpClient } from '@angular/common/http';
import { HttpClientHelper } from 'src/helpers/HttpClientHelper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = HttpClientHelper.baseURL + 'user';
  constructor(private http: HttpClient) {}

  getUserById(user_id: string): Observable<myUser> {
    const url = `${this.userUrl}?user_id=${user_id}`;
    return this.http.get<myUser>(url);
  }
}
