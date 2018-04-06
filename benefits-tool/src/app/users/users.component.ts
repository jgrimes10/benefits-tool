import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { XlsxService } from '../shared/services/xlsx.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'position', 'edit'];
  dataSource: MatTableDataSource<User>;
  users: User[];
  showUpload = false;
  showImport = true;
  fileSelected: File;
  fileName: string;
  userCount: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private xlsxService: XlsxService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(users);
      this.userCount = users.length;
      this.paginator.pageSize = 10;
      this.dataSource.paginator = this.paginator;
    });
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openSnackBar() {
    this.snackbar.open('Saved!', '', {duration: 3000, horizontalPosition: 'center'});
  }

  openUpdateUserModal(user) {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      data: user,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar();
      }
    });
  }

  onChange(event) {
    this.showImport = false;
    this.showUpload = true;
    this.fileSelected = event.target.files[0];
    this.fileName = this.fileSelected.name;
  }

  upload() {
    this.xlsxService.uploadReliasEmployeesFile(this.fileSelected);
    this.showUpload = false;
    this.showImport = true;
  }

  cancel() {
    this.showUpload = false;
    this.showImport = true;
  }
}
