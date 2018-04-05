import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
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
  // isAdmin: boolean;
  // email: string;
  // firstName: string;
  // lastName: string;
  // position: string;
  // department: string;
  // salary: number;
  // medical: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private userService: UserService) { }

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
      'medical': ['', Validators.required]
    });
  }


  createUser() {
    const form = this.userForm;
    const user = new User({
      firstName: form.controls.firstName.value,
      lastName: form.controls.lastName.value,
      // email: form.controls.email.value,
      // position: form.controls.position.value,
      // department: form.controls.department.value,
      // salary: form.controls.salary.value,
      // isAdmin: form.controls.isAdmin.value,
      // medical: form.controls.medical.value
    });
    console.log(user);

    // this.userService.createUser(this.user);
  }
}
