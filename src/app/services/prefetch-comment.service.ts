import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve} from '@angular/router';
import {CommentService} from './comment.service';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PrefetchCommentService implements Resolve<Comment[]> {

  constructor(private commentService: CommentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.commentService.getAllComments();
  }
}
