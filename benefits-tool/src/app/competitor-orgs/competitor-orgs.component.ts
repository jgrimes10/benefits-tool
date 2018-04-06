import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

import { CreateOrgComponent } from './create-org/create-org.component';
import { OrganizationService } from '../shared/services/organization.service';
import { CompetitorOrganization } from '../shared/models/organization.model';
import { XlsxService } from '../shared/services/xlsx.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-competitor-orgs',
  templateUrl: './competitor-orgs.component.html',
  styleUrls: ['./competitor-orgs.component.scss']
})
export class CompetitorOrgsComponent implements OnInit {

  displayedColumns = ['orgName', 'compPosition', 'avgSalary', 'avgBonus', 'avgMedical', 'edit'];
  dataSource: MatTableDataSource<CompetitorOrganization>;
  orgs: CompetitorOrganization[];
  showUpload = false;
  showImport = true;
  fileSelected: File;

  constructor(
    public dialog: MatDialog,
    private orgService: OrganizationService,
    private xlsxService: XlsxService
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

  openUpdateOrgModal(org) {
    const dialogRef = this.dialog.open(CreateOrgComponent, {
      data: org,
      width: '40%'
    });
  }

  onChange(event) {
    this.showImport = false;
    this.showUpload = true;
    this.fileSelected = event.target.files[0];
  }

  upload() {
    this.xlsxService.uploadFile(this.fileSelected);
    this.showUpload = false;
    this.showImport = true;
  }
}
