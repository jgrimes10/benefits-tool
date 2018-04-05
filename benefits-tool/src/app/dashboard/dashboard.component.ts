import { Component, OnInit, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
import { MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SeriesModel } from './series.model';
import { UserService } from '../shared/services/user.service';
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
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService, private authService: AuthService) {
    this.barData = new Array();
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user[0];
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
        width: 800,
        margin: {'left': 100},
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showControls: false,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Values',
          tickFormat: function(d) {
            return d3.format(',.2f')(d);
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
        y: this.user !== undefined ? this.user.medical : 474.24
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
        y: this.user !== undefined ? this.user.tuition : 7000
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
        'key': 'Company 2',
        'color': '#f1ac00',
        'values': [
          {
            'label': 'Salary',
            'value': 90000
          },
          {
            'label': 'Bonus',
            'value': 7500
          },
          {
            'label': '401k',
            'value': 7000
          },
          {
            'label': 'Medical',
            'value': 400
          },
          {
            'label': 'Dental',
            'value': 75
          },
          {
            'label': 'Vision',
            'value': 0
          },
          {
            'label': 'HSA',
            'value': 500
          },
          {
            'label': 'PTO',
            'value': 3500
          },
          {
            'label': 'Tuition',
            'value': 0
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
