import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../shared/custom-material-module.module';
import { CompetitorOrgsComponent } from './competitor-orgs.component';
import { CreateOrgComponent } from './create-org/create-org.component';
import { CompetitorOrgsRoutingModule } from './competitor-orgs-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CompetitorOrgsRoutingModule
    ],
    declarations: [
        CompetitorOrgsComponent,
        CreateOrgComponent
    ],
    entryComponents: [ CreateOrgComponent ]
})
export class CompetitorOrgsModule { }
