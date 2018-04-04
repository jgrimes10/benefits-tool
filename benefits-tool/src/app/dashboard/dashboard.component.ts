import { Component, OnInit, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
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
  compare = false;
  pieOptions: Object;
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
  barOptions: Object;
  barData: Array<any> = [

  ];
  constructor() { }

  ngOnInit() {
    this.pieOptions = {
      chart: {
        type: 'pieChart',
        height: 500,
        width: 800,
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
  }

}
