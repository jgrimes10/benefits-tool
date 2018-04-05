import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

import { CreateOrgComponent } from './create-org/create-org.component';
import { OrganizationService } from '../shared/services/organization.service';
import { CompetitorOrganization } from '../shared/models/organization.model';

@Component({
  selector: 'app-competitor-orgs',
  templateUrl: './competitor-orgs.component.html',
  styleUrls: ['./competitor-orgs.component.scss']
})
export class CompetitorOrgsComponent implements OnInit {

  displayedColumns = ['orgName', 'avgSalary', 'avgBonus', 'avgMedical', 'edit'];
  dataSource: MatTableDataSource<CompetitorOrganization>;

  orgs: CompetitorOrganization[];

  constructor(
    public dialog: MatDialog,
    private orgService: OrganizationService
  ) { }

  ngOnInit() {
    this.orgService.getCompetitorOrganizations().subscribe(orgs => {
      this.orgs = orgs;
      this.dataSource = new MatTableDataSource<CompetitorOrganization>(orgs);
    });
  }

  openCreateNewOrgModal() {
    const dialogRef = this.dialog.open(CreateOrgComponent, {
      width: '40%'
    });
  }
}
