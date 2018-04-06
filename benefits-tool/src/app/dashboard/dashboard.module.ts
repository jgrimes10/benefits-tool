import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NvD3Module, NvD3Component } from 'ng2-nvd3';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import 'd3';
import 'nvd3';
import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NvD3Module,
    FormsModule
  ],
  declarations: [
      DashboardComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class DashboardModule { }
