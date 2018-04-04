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
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.users$ = this.db.list('users');
  }

  getUsers(): Observable<User[]> {
    return this.users$.map<User[], User[]>(users => users);
  }

  createUser(email, isAdmin, firstName, lastName, position, salary, bonus,
    _401k, medical, dental, hsa, pto, numberOfPtoDaysTaken, tuition): void {
    // use model to instantiate new user with data from create user modal
    // push the instantiation to firebase list observable
    const newUser = new User(email, isAdmin, firstName, lastName, position, salary, bonus,
      _401k, medical, dental, hsa, pto, numberOfPtoDaysTaken, tuition);
      this.users$.push(newUser);
  }

  // user will not be able to update their email
  updateUser(userId, isAdmin, firstName, lastName, position, salary, bonus,
    _401k, medical, dental, hsa, pto, numberOfPtoDaysTaken, tuition) {
    // get user to update using user's $key
    const user$ = this.db.object(`users/${userId}`);
    user$.subscribe(user => {
      const userToUpdate: User = user;
      userToUpdate.isAdmin = isAdmin;
      userToUpdate.firstName = firstName;
      userToUpdate.lastName = lastName;
      userToUpdate.position = position;
      userToUpdate.salary = salary;
      userToUpdate.bonus = bonus;
      userToUpdate._401k = _401k;
      userToUpdate.medical = medical;
      userToUpdate.dental = dental;
      userToUpdate.hsa = hsa;
      userToUpdate.pto = pto;
      userToUpdate.numberOfPtoDaysTaken = numberOfPtoDaysTaken;
      userToUpdate.tuition = tuition;
      user$.set(userToUpdate);
      this.router.navigate(['/users']);
    });
  }
}
