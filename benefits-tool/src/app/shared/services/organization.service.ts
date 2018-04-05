import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { ReliasBenefits } from '../models/relias-benefits.model';
import { UserService } from './user.service';

@Injectable()
export class OrganizationService {

  private reliasBenefits$: FirebaseObjectObservable<ReliasBenefits>;

  constructor(
    private db: AngularFireDatabase,
    private userService: UserService
  ) {
    this.reliasBenefits$ = this.db.object('relias');
  }

  getReliasBenefits(): Observable<ReliasBenefits> {
    return this.reliasBenefits$.map<ReliasBenefits, ReliasBenefits>(relias => relias);
  }

  updateReliasBenefits(reliasBenefits: ReliasBenefits) {
    this.reliasBenefits$.set(reliasBenefits);
    this.userService.updateUsers(reliasBenefits);
  }
}
