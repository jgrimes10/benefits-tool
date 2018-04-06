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

  defaultBenefits: ReliasBenefits;
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
      this.defaultBenefits = new ReliasBenefits(benefits._401k, benefits.bonus, benefits.dental,
        benefits.HSA, benefits.medical, benefits.pto, benefits.tuition, benefits.vision);
      this.myBenefits = benefits;
      this.showSpinner = false;
    });
  }

  openSnackBarForSave() {
    this.snackbar.open('Saved!', '', { duration: 3000, horizontalPosition: 'center' });
  }

  openSnackBarForReset() {
    this.snackbar.open('Reset to Relias defaults!', '', { duration: 3000, horizontalPosition: 'center' });
  }

  onSave() {
    this.orgService.updateReliasBenefits(this.myBenefits);
    this.openSnackBarForSave();
  }

  onReset() {
    console.log(this.defaultBenefits);
    this.myBenefits = new ReliasBenefits(this.defaultBenefits._401k, this.defaultBenefits.bonus, this.defaultBenefits.dental,
      this.defaultBenefits.HSA, this.defaultBenefits.medical, this.defaultBenefits.pto, this.defaultBenefits.tuition,
      this.defaultBenefits.vision);
    this.openSnackBarForReset();
  }
}
