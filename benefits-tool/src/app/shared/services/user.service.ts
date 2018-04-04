import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private users$: FirebaseListObservable<User[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.users$ = this.db.list('users');
  }

  getUsers(): Observable<User[]> {
    return this.users$.map<User[], User[]>(users => users);
  }
}
