import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvD3Module, NvD3Component } from 'ng2-nvd3';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NvD3Module
  ],
  declarations: [
      DashboardComponent
  ]
})
export class DashboardModule { }
