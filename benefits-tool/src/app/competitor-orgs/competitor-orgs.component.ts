import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { CreateOrgComponent } from './create-org/create-org.component';

@Component({
  selector: 'app-competitor-orgs',
  templateUrl: './competitor-orgs.component.html',
  styleUrls: ['./competitor-orgs.component.scss']
})
export class CompetitorOrgsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateNewOrgModal() {
    const dialogRef = this.dialog.open(CreateOrgComponent, {
      width: '40%'
    });
  }
}
