import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('http://jsonplaceholder.typicode.com/comments');
  }
  getCommentsofthePost(id): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`http://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
