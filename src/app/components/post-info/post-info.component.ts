import { Component} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/Comment';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  post: Post;
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      this.post = history.state.post;
      this.commentService.getCommentsofthePost(this.post.id).subscribe(value1 => console.log(value1));
    });
  }
}
