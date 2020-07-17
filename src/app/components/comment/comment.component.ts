import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;
  constructor(private router: Router) { }
  navigate(comment): void {
    this.router.navigate(['comments', 'comment', comment.id], {state: {comment}});
  }

  ngOnInit(): void {
  }

}
