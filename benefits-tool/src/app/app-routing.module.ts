import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ReliasBenefitsComponent } from './relias-benefits/relias-benefits.component';
import { CompetitorOrgsComponent } from './competitor-orgs/competitor-orgs.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
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
        {
          path: 'relias-benefits',
          component: ReliasBenefitsComponent
        },
        {
          path: 'competitor-orgs',
          loadChildren: 'app/competitor-orgs/competitor-orgs.module#CompetitorOrgsModule'
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
