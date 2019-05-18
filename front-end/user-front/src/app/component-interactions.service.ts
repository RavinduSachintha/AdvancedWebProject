import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionsService {

  private _userProfileObject = new Subject<User>();
  userProfile$ = this._userProfileObject.asObservable();

  constructor() { }

  sendUser(message: User) {
    this._userProfileObject.next(message);
  }

}
