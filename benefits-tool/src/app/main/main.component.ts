import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  opened = true;
  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user[0];
    });
  }

  logout() {
    this.authService.logout();
  }

}
