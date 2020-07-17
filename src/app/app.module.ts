import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {PostService} from './services/post.service';
import { PostComponent } from './components/post/post.component';
import {CommentService} from './services/comment.service';
import {LeavePageService} from './services/leave-page.service';
import {PrefetchUserService} from './services/prefetch-user.service';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {PrefetchPostService} from './services/prefetch-post.service';
import {PrefetchCommentService} from './services/prefetch-comment.service';
import { CommentInfoComponent } from './components/comment-info/comment-info.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserInfoComponent,
    AllUsersComponent,
    PostComponent,
    AllPostsComponent,
    PostInfoComponent,
    CommentComponent,
    AllCommentsComponent,
    CommentInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users',
        component: AllUsersComponent,
        canActivate: [LeavePageService],
        resolve: {xxx: PrefetchUserService},
        children: [
       {path: 'user/:id', component: UserInfoComponent},
        ]
      },
      { path: 'posts',
        component: AllPostsComponent,
        canActivate: [LeavePageService],
        resolve: {yyy: PrefetchPostService},
        children: [
          {path: 'post/:id', component: PostInfoComponent}
        ]
      },
      {path: 'comments',
        component: AllCommentsComponent,
        canActivate: [LeavePageService],
        resolve: {zzz: PrefetchCommentService},
        children: [
          {path: 'comment/:id', component: CommentInfoComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
