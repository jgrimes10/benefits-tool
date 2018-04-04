import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: '',
          loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
          pathMatch: 'full'
        },
        {
          path: 'users',
          loadChildren: 'app/users/users.module#UsersModule'
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
