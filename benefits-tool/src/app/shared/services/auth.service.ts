import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  private users$: FirebaseListObservable<User[]>;
  private userEmail: string;
  private currentUser: User;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user$ = afAuth.authState;
    this.user$.subscribe(user => {
      if (!user) {
        this.logout();
      } else {
        this.userEmail = user.email;
      }
      if (!this.currentUser) {
        this.setAuthenticatedUser();
      }
    });
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          this.router.navigate(['']);
      })
      .catch(error => {
        // if we can catch this error and send it to the LoginComponent, we can have server-side validation
        this.router.navigate(['/login']);
      });
  }

  setAuthenticatedUser(): void {
    this.users$ = this.db.list('users');
    this.users$.subscribe(users => {
      const authenticatedUser = users.filter(user => user.email === this.userEmail)[0];
      if (!authenticatedUser) {
        const newUser = new User(this.userEmail, false);
        this.users$.push(newUser);
      }
      this.currentUser = authenticatedUser;
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
