import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl: string = 'https://localhost:44322/api/posts';
  jsonUrl: string = 'http://localhost:5000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.jsonUrl);
  }
}
