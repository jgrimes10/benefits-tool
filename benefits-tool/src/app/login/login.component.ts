import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.form.addControl('username', new FormControl(''));
    this.form.addControl('password', new FormControl(''));
  }

  onSubmit(): void {
    this.authService.signInWithEmailAndPassword(this.form.controls.username.value, this.form.controls.password.value);
  }
}
