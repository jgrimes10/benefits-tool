import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { CustomMaterialModule } from '../shared/custom-material-module.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
      LoginComponent,
  ]
})
export class LoginModule { }
