import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NvD3Module } from 'ng2-nvd3';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CustomMaterialModule } from './shared/custom-material-module.module';

import { environment } from '../environments/environment';
import { AuthService } from '../app/shared/services/auth.service';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { UserService } from '../app/shared/services/user.service';
import { OrganizationService } from '../app/shared/services/organization.service';

import 'd3';
import 'nvd3';
import { ReliasBenefitsComponent } from './relias-benefits/relias-benefits.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReliasBenefitsComponent,
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NvD3Module,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
