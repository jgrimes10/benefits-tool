import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'department', 'position'];
  dataSource = new MatTableDataSource<TestUser>(TEST_USER_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
}

const TEST_USER_DATA: TestUser[] = [
  {firstName: 'Test', lastName: 'Test1', email: 'test1@test.com', department: 'Engineering', position: 'ASE'},
  {firstName: 'Test', lastName: 'Test2', email: 'test2@test.com', department: 'Sales', position: 'B2B'}
];
