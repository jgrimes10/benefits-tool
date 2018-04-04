import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'isAdmin', 'position', 'edit'];
  dataSource: MatTableDataSource<User>;

  users: User[];

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(users);
    });
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
