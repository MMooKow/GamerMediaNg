import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'https://localhost:44322/api/users';
  jsonUrl: string = 'http://localhost:5000/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.jsonUrl);
  }
}
