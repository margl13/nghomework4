import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeavePageService implements CanActivate<any> {

  constructor() { }

 canActivate(): boolean {
    return confirm('are u sure?');

 }


}
