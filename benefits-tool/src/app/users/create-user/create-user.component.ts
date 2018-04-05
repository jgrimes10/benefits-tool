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
    this.userForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'position': ['', Validators.required],
      'department': ['', Validators.required],
      'salary': ['', Validators.required],
      'isAdmin': ['', Validators.required],
      'medicalType': ['', Validators.required]
    });
  }

  createUser() {
    const form = this.userForm;
    const user = new User(
      form.controls.email.value,
      form.controls.isAdmin.value,
      form.controls.firstName.value,
      form.controls.lastName.value,
      form.controls.position.value,
      form.controls.department.value,
      form.controls.salary.value,
      form.controls.medicalType.value
    );

    this.userService.createUser(user);
    this.dialogRef.close();
  }
}
