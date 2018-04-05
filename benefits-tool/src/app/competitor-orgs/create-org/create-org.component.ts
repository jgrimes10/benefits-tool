import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CompetitorOrganization } from '../../shared/models/organization.model';
import { OrganizationService } from '../../shared/services/organization.service';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.scss']
})
export class CreateOrgComponent implements OnInit {

  competitor: CompetitorOrganization;
  orgForm: FormGroup;

  constructor(
    public diaglogRef: MatDialogRef<CreateOrgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private orgService: OrganizationService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.orgForm = this.formBuilder.group({
      'orgName': ['', Validators.required],
      'avgSalary': [''],
      'avgBonus': [''],
      'avgPTO': [''],
      'avgTuition': [''],
      'avgMedical': [''],
      'avg401k': [''],
      'avgDental': [''],
      'avgVision': ['']
    });
  }

  onSave() {
    const form = this.orgForm;
    const org = new CompetitorOrganization(
      form.controls.orgName.value,
      form.controls.avgSalary.value,
      form.controls.avgBonus.value,
      form.controls.avg401k.value,
      form.controls.avgMedical.value,
      form.controls.avgDental.value,
      form.controls.avgVision.value,
      form.controls.avgTuition.value,
      form.controls.avgPTO.value,
    );

    if (!org.$key) {
      this.orgService.insertCompetitorOrganization(org);
    } else {
      this.orgService.updateCompetitorOrganization(org);
    }
    this.diaglogRef.close();
  }

  onCancel() {
    this.diaglogRef.close();
  }

}
