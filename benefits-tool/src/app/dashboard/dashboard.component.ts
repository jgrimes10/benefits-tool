import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
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
  user: User;
  selectedOrg;
  pieOptions: Object;
  barOptions: Object;
  pieData: Array<any> = [];
  barData: Array<SeriesModel>;
  competitorOrgs: CompetitorOrganization[];
  dataSource: MatTableDataSource<User>;

  constructor(private orgService: OrganizationService, private authService: AuthService) {
    this.barData = new Array();
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user[0];
      const currentUserPosition = this.user.position;

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

      this.orgService.getCompetitorOrganizationsByPosition(currentUserPosition).subscribe(orgs => {
        this.competitorOrgs = orgs;

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
          }
        ];
      });
    });

    this.pieOptions = {
      chart: {
        type: 'pieChart',
        height: 500,
        width: 700,
        x: function(d) { return d.key; },
        y: function(d) { return d.y; },
        valueFormat: d3.format('$,.0f'),
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
        valueFormat: d3.format('$,.0f'),
        duration: 500,
        tooltips: true,
        tooltip: {
          contentGenerator: function(e, elem) {
            return '<p>' + e.data.key + ': ' + e.data.label + ' - ' + d3.format('$,')(e.data.value) + '</p>';
          }
        },
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Amount ($)',
          tickFormat: function(d) {
            return d3.format(',')(d);
          }
        }
      }
    };
  }

  filterChanged(value) {
    this.barData.splice(1, 2);
    this.barData.push({
      key: value.name,
      color: '#f1ac00',
      values: [
        {
          'label': 'Salary',
          'value': value.avgSalary
        },
        {
          'label': 'Bonus',
          'value': (value.avgBonus / 100) * value.avgSalary
        },
        {
          'label': '401k',
          'value': (value.avg401k / 100) * value.avgSalary
        },
        {
          'label': 'Medical',
          'value': value.avgMedical
        },
        {
          'label': 'Dental',
          'value': value.avgDental
        },
        {
          'label': 'Vision',
          'value': value.avgVision
        },
        {
          'label': 'HSA',
          'value': value.hsa !== undefined ? value.hsa : 0 // we don't have an HSA for other orgs
        },
        {
          'label': 'PTO',
          'value': (value.avgPTO / 100) * value.avgSalary
        },
        {
          'label': 'Tuition',
          'value': value.avgTuition
        }
      ]
    });

    console.log(this.barData);
    this.nvd3.chart.update();
  }

  pieView(): void {
    this.compareBenefits = false;
  }

  compareView(): void {
    this.compareBenefits = true;
  }
}
