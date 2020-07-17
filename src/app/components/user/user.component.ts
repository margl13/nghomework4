import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input()
  user: User;

  constructor(private router: Router) { }
  navigate(user): void {
    this.router.navigate(['users', 'user', user.id], {state: {user}});
  }
}
