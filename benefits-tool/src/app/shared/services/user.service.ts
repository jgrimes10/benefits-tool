import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { OrganizationService } from './organization.service';
import { User } from '../models/user.model';
import { ReliasBenefits } from '../models/relias-benefits.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private users$: FirebaseListObservable<User[]>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.users$ = this.db.list('users');
  }

  getUsers(): Observable<User[]> {
    return this.users$.map<User[], User[]>(users => users);
  }

  getUser(userId): Observable<User[]> {
    return this.users$.map<User[], User[]>(users =>
      users.filter(user => user.$key === userId)
    );
  }

  createUser(user: User): void {
    this.db.object('relias').subscribe(benefits => {
      user._401k = Number((user.salary * (benefits._401k / 100)).toFixed(2));
      user.bonus = Number((user.salary * (benefits.bonus / 100)).toFixed(2));
      user.dental = benefits.dental;
      user.hsa = benefits.HSA;
      user.medical = benefits.medical;
      user.tuition = benefits.tuition;
      user.pto = Number((user.salary * (benefits.pto / 100)).toFixed(2));
      user.vision = benefits.vision;
      this.users$.push(user);
    });
  }

  // user will not be able to update their email
  updateUser(userObj) {
    // get user to update using user's $key
    const user$ = this.db.object(`users/${userObj.$key}`);
    user$.set(userObj);
  }

  updateUsers(reliasBenefits: ReliasBenefits): void {
    this.getUsers().subscribe(users => {
      users.forEach(user => {
        const user$ = this.db.object(`users/${user.$key}`);
        user$.subscribe(userToUpdate => {
          userToUpdate._401k = Number((userToUpdate.salary * (reliasBenefits._401k / 100)).toFixed(2));
          userToUpdate.bonus = Number((userToUpdate.salary * (reliasBenefits.bonus / 100)).toFixed(2));
          userToUpdate.dental = reliasBenefits.dental;
          userToUpdate.hsa = reliasBenefits.HSA;
          userToUpdate.medical = reliasBenefits.medical;
          userToUpdate.tuition = reliasBenefits.tuition;
          userToUpdate.pto = Number((userToUpdate.salary * (reliasBenefits.pto / 100)).toFixed(2));
          userToUpdate.vision = reliasBenefits.vision;
          user$.set(userToUpdate);
        });
      });
    });
  }
}
