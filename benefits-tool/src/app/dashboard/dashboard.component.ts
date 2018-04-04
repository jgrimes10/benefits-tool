import { Component, OnInit, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
// import { SeriesModel } from './series.model';

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
  pieData: Array<any> = [
    {
      key: 'Salary',
      y: 20000
    },
    {
      key: 'Bonus',
      y: 1000
    },
    {
      key: '401k',
      y: 1000
    },
    {
      key: 'Medical',
      y: 3000
    },
    {
      key: 'Dental',
      y: 2000
    },
    {
      key: 'HSA',
      y: 1500
    },
    {
      key: 'PTO',
      y: 4000
    },
    {
      key: 'Tuition',
      y: 2000
    }
  ];
  barData: [
    {
      'key': 'Salary',
      'color': '#d62728',
      'values': [
        {
          'label': 'Relias' ,
          'value': 20000
        } ,
        {
          'label': 'Company 1' ,
          'value': 15000
        } ,
        {
          'label': 'Company 2' ,
          'value': 17500
        } ,
        {
          'label': 'Company 3' ,
          'value': 22000
        }
      ]
    },
    {
      'key': 'Medical',
      'color': '#1f77b4',
      'values': [
        {
          'label': 'Relias' ,
          'value': 20000
        } ,
        {
          'label': 'Company 1' ,
          'value': 15000
        } ,
        {
          'label': 'Company 2' ,
          'value': 17500
        } ,
        {
          'label': 'Company 3' ,
          'value': 22000
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
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
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.barOptions = {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 450,
        width: 800,
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showControls: true,
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
  }

  pieView(): void {
    this.compareBenefits = false;
  }

  compareView(): void {
    this.compareBenefits = true;
  }


}
