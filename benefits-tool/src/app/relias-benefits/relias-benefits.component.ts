import { Component, OnInit } from '@angular/core';
import { ReliasBenefits } from '../shared/models/relias-benefits.model';
import { OrganizationService } from '../shared/services/organization.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-relias-benefits',
  templateUrl: './relias-benefits.component.html',
  styleUrls: ['./relias-benefits.component.scss']
})
export class ReliasBenefitsComponent implements OnInit {

  myBenefits: ReliasBenefits;

  showSpinner = true;

  constructor(
    private orgService: OrganizationService,
    private snackbar: MatSnackBar
  ) { }

  disabled = true;

  lock = this.disabled ? 'lock' : 'lock_open';

  ngOnInit() {
    this.orgService.getReliasBenefits().subscribe(benefits => {
      this.myBenefits = benefits;
      this.showSpinner = false;
    });
  }

  openSnackBar() {
    this.snackbar.open('Saved!', '', {duration: 3000, horizontalPosition: 'center'});
  }

  onSave() {
    console.log('saved ' + this.myBenefits);
    this.orgService.updateReliasBenefits(this.myBenefits);
    this.openSnackBar();
  }
}
