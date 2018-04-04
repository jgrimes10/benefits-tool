import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
      UsersComponent,
      CreateUserComponent
  ],
  entryComponents: [ CreateUserComponent ]
})
export class UsersModule { }
