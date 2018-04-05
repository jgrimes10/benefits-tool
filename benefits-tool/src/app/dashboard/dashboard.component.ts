import { Component, OnInit, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SeriesModel } from './series.model';
import { OrganizationService } from '../shared/services/organization.service';
import { CompetitorOrganization } from '../shared/models/organization.model';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/user.model';

import 'd3';
import 'nvd3';

declare let d3: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
              '../../../node_modules/nvd3/build/nv.d3.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('nvd3') nvd3;
  compareBenefits = false;
  pieOptions: Object;
  barOptions: Object;
  pieData: Array<any> = [];
  barData: Array<SeriesModel>;
  user: User;
  competitorOrgs: CompetitorOrganization[];
  dataSource: MatTableDataSource<User>;

  constructor(private orgService: OrganizationService, private authService: AuthService) {
    this.barData = new Array();
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user[0];
    });
    this.orgService.getCompetitorOrganizations().subscribe(orgs => {
      this.competitorOrgs = orgs;
    });

    this.pieOptions = {
      chart: {
        type: 'pieChart',
        height: 500,
        width: 700,
        x: function(d) { return d.key; },
        y: function(d) { return d.y; },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 0,
            bottom: 5,
            left: 10
          }
        }
      }
    };

    this.barOptions = {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 800,
        width: 1000,
        margin: {'left': 75},
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showControls: false,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: true
        },
        yAxis: {
          axisLabel: 'Amount ($)',
          tickFormat: function(d) {
            return d3.format(',')(d);
          }
        }
      }
    };

    this.pieData = [
      {
        key: 'Salary',
        y: this.user !== undefined ? this.user.salary : 100000
      },
      {
        key: 'Bonus',
        y: this.user !== undefined ? this.user.bonus : 10000
      },
      {
        key: '401k',
        y: this.user !== undefined ? this.user._401k : 6000
      },
      {
        key: 'Medical',
        y: this.user !== undefined ? this.user.medical : 475
      },
      {
        key: 'Dental',
        y: this.user !== undefined ? this.user.dental : 125
      },
      {
        key: 'Vision',
        y: this.user !== undefined ? this.user.vision : 125
      },
      {
        key: 'HSA',
        y: this.user !== undefined ? this.user.hsa : 500
      },
      {
        key: 'PTO',
        y: this.user !== undefined ? this.user.pto : 7000
      },
      {
        key: 'Tuition',
        y: this.user !== undefined ? this.user.tuition : 4000
      }
    ];

    this.barData = [
      {
        'key': 'Relias',
        'color': '#00a7a6',
        'values': [
          {
            'label': 'Salary',
            'value': this.user !== undefined ? this.user.salary : 100000
          },
          {
            'label': 'Bonus',
            'value': this.user !== undefined ? this.user.bonus : 10000
          },
          {
            'label': '401k',
            'value': this.user !== undefined ? this.user._401k : 6000
          },
          {
            'label': 'Medical',
            'value': this.user !== undefined ? this.user.medical : 474.24
          },
          {
            'label': 'Dental',
            'value': this.user !== undefined ? this.user.dental : 125
          },
          {
            'label': 'Vision',
            'value': this.user !== undefined ? this.user.vision : 125
          },
          {
            'label': 'HSA',
            'value': this.user !== undefined ? this.user.hsa : 500
          },
          {
            'label': 'PTO',
            'value': this.user !== undefined ? this.user.tuition : 7000
          },
          {
            'label': 'Tuition',
            'value': this.user !== undefined ? this.user.tuition : 4000
          }
        ]
      },
      {
        'key': this.competitorOrgs !== undefined ? this.competitorOrgs[0].name : 'Competitor #2',
        'color': '#f1ac00',
        'values': [
          {
            'label': 'Salary',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgSalary : 90000
          },
          {
            'label': 'Bonus',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgBonus : 7500
          },
          {
            'label': '401k',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avg401k : 4200
          },
          {
            'label': 'Medical',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgMedical : 400
          },
          {
            'label': 'Dental',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgDental : 75
          },
          {
            'label': 'Vision',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgVision : 0
          },
          {
            'label': 'HSA',
            'value': 500
          },
          {
            'label': 'PTO',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgPTO : 3200
          },
          {
            'label': 'Tuition',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[0].avgTuition : 0
          }
        ]
      },
      {
        'key': this.competitorOrgs !== undefined ? this.competitorOrgs[1].name : 'Competitor #3',
        'color': '#166dab',
        'values': [
          {
            'label': 'Salary',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgSalary : 92000
          },
          {
            'label': 'Bonus',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgBonus : 5000
          },
          {
            'label': '401k',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avg401k : 2000
          },
          {
            'label': 'Medical',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgMedical : 600
          },
          {
            'label': 'Dental',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgDental : 0
          },
          {
            'label': 'Vision',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgVision : 100
          },
          {
            'label': 'HSA',
            'value': 1000
          },
          {
            'label': 'PTO',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgPTO : 4000
          },
          {
            'label': 'Tuition',
            'value': this.competitorOrgs !== undefined ? this.competitorOrgs[1].avgTuition : 0
          }
        ]
      }
    ];
  }

  pieView(): void {
    this.compareBenefits = false;
  }

  compareView(): void {
    this.compareBenefits = true;
  }
}
