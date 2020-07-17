import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  constructor(private router: Router) { }
  navigate(post): void {
    this.router.navigate(['posts', 'post', post.id], {state: {post}});
  }
  ngOnInit(): void {
  }

}
