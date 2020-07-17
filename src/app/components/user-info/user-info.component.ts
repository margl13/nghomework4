import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private commentService: CommentService
  ) {
      this.activatedRoute.params.subscribe(value => {
      this.user = history.state.user;
      this.postService.getPosts(this.user.id).subscribe(allPostsOfUser => {
        this.posts = allPostsOfUser;
        for (const post of allPostsOfUser) {
          commentService.getCommentsofthePost(post.id).subscribe(value1 => console.log(value1));
          }
      });
    });
  }
  ngOnInit(): void {
  }


}

