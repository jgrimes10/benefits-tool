import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitorOrgsComponent } from './competitor-orgs.component';
import { CreateOrgComponent } from './create-org/create-org.component';

const routes: Routes = [
    {
        path: '',
        component: CompetitorOrgsComponent,
        children: [
            {
                path: 'create',
                component: CreateOrgComponent
            },
            {
                path: '*',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class CompetitorOrgsRoutingModule { }
