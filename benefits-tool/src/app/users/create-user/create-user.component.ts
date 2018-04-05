import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  buildForm() {
    this.user = this.user || new User();
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName],
      lastName: [this.user.lastName],
      email: [this.user.email],
      department: [this.user.department],
      position: [this.user.position],
      salary: [this.user.salary],
      admin: [this.user.isAdmin]
    });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(res => {
      console.log(res);
    });
  }
}
