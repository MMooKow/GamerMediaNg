import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl: string = 'https://localhost:44322/api/comments';
  jsonUrl: string = 'http://localhost:5000/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }
}
