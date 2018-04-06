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
    this.competitor = this.data || new CompetitorOrganization('', '');
    this.orgForm = this.formBuilder.group({
      'orgName': [this.competitor.name, Validators.required],
      'compPosition': [this.competitor.position, Validators.required],
      'avgSalary': [this.competitor.avgSalary],
      'avgBonus': [this.competitor.avgBonus],
      'avgPTO': [this.competitor.avgPTO],
      'avgTuition': [this.competitor.avgTuition],
      'avgMedical': [this.competitor.avgMedical],
      'avg401k': [this.competitor.avg401k],
      'avgDental': [this.competitor.avgDental],
      'avgVision': [this.competitor.avgVision]
    });
  }

  onSave() {
    const form = this.orgForm;

    this.competitor.name = form.controls.orgName.value;
    this.competitor.position = form.controls.compPosition.value;
    this.competitor.avgSalary = form.controls.avgSalary.value;
    this.competitor.avgBonus = form.controls.avgBonus.value;
    this.competitor.avgPTO = form.controls.avgPTO.value;
    this.competitor.avgTuition = form.controls.avgTuition.value;
    this.competitor.avgMedical = form.controls.avgMedical.value;
    this.competitor.avg401k = form.controls.avg401k.value;
    this.competitor.avgDental = form.controls.avgDental.value;
    this.competitor.avgVision = form.controls.avgVision.value;


    if (!this.competitor.$key) {
      this.orgService.insertCompetitorOrganization(this.competitor);
    } else {
      this.orgService.updateCompetitorOrganization(this.competitor);
    }
    this.diaglogRef.close(this.competitor);
  }

  onCancel() {
    this.diaglogRef.close();
  }

}
