import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSnackBar, MatSort } from '@angular/material';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { CreateOrgComponent } from './create-org/create-org.component';
import { OrganizationService } from '../shared/services/organization.service';
import { CompetitorOrganization } from '../shared/models/organization.model';
import { XlsxService } from '../shared/services/xlsx.service';
import * as XLSX from 'xlsx';
import 'rxjs/add/operator/do';

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
  fileName: string;
  orgCount: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private orgService: OrganizationService,
    private xlsxService: XlsxService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadData();
  }

  openCreateNewOrgModal() {
    const dialogRef = this.dialog.open(CreateOrgComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar();
      }
    });
  }

  openUpdateOrgModal(org) {
    const dialogRef = this.dialog.open(CreateOrgComponent, {
      data: org,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  loadData() {
    this.orgService.getCompetitorOrganizations().subscribe(orgs => {
      this.orgs = orgs;
      this.dataSource = new MatTableDataSource<CompetitorOrganization>(orgs);
      this.orgCount = this.orgs.length;
      this.paginator.pageSize = 10;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onChange(event) {
    this.showImport = false;
    this.showUpload = true;
    this.fileSelected = event.target.files[0];
    this.fileName = this.fileSelected.name;
  }

  upload() {
    this.xlsxService.uploadMarketResearchFile(this.fileSelected);
    this.showUpload = false;
    this.showImport = true;
  }

  cancel() {
    this.showUpload = false;
    this.showImport = true;
  }

  openSnackBar() {
    this.snackbar.open('Saved!', '', {duration: 3000, horizontalPosition: 'center'});
  }
}
