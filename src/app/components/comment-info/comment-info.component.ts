import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {
 comment: Comment;
 comments: Comment[];
  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.comment = history.state.comment;
    });

  }
  ngOnInit(): void {
  }

}
