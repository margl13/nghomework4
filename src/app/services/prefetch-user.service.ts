import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {ActivatedRoute, Resolve} from '@angular/router';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PrefetchUserService implements Resolve<User[]> {

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User {
    return this.userService.getallUsers();
  }
}
