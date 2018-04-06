import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.user = this.data || new User();
    this.userForm = this.formBuilder.group({
      'firstName': [this.user.firstName, Validators.required],
      'lastName': [this.user.lastName, Validators.required],
      'email': [this.user.email, Validators.required],
      'position': [this.user.position, Validators.required],
      'department': [this.user.department, Validators.required],
      'salary': [this.user.salary, Validators.required],
      'isAdmin': [this.user.isAdmin, Validators.required],
      'medicalType': [this.user.medicalType, Validators.required]
    });
  }

  createUser() {
    const form = this.userForm;

    this.user.email = form.controls.email.value;
    this.user.isAdmin = form.controls.isAdmin.value;
    this.user.firstName = form.controls.firstName.value;
    this.user.lastName = form.controls.lastName.value;
    this.user.position = form.controls.position.value;
    this.user.department = form.controls.department.value;
    this.user.salary = form.controls.salary.value;
    this.user.medicalType = form.controls.medicalType.value;

    if (!this.user.$key) {
      this.userService.createUser(this.user);
    } else {
      this.userService.updateUser(this.user);
    }
    this.dialogRef.close(this.user);
  }
}
