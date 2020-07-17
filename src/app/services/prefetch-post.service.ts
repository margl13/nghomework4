import { Injectable } from '@angular/core';
import {PostService} from './post.service';
import {Resolve} from '@angular/router';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PrefetchPostService implements Resolve<Post[]> {
  constructor(private postService: PostService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPosts();
  }


}
