import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../shared/custom-material-module.module';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
      UsersComponent,
      CreateUserComponent
  ],
  entryComponents: [ CreateUserComponent ]
})
export class UsersModule { }
