import { Component, OnInit, ViewChild } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';
import { SeriesModel } from './series.model';

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
  barData: Array<SeriesModel>;
  benefitsData: SeriesModel;
  comparisonBenefits: SeriesModel;

  constructor() {
    this.benefitsData = new SeriesModel();
    this.comparisonBenefits = new SeriesModel();
    this.barData = new Array();
  }

  ngOnInit() {
    this.barData = [];
    this.benefitsData.key = 'CurrentBenefits';
    this.benefitsData.values = [
      {
        key: 'something',
        y: 20000
      },
      {
        key: 'something',
        y: 100
      }
    ];
    console.log(this.benefitsData);

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
        height: 500,
        width: 800,
        margin : {
          top: 50,
          right: 50,
          bottom: 50,
          left: 500
        },
        showLegend: false,
        clipEdge: true,
        staggerLabels: true,
        dispatch: {
          elementClick: function(e) { console.log('click'); }
        },
        yDomain: [0, 100],
        x: function(d) { return d.label; },
        y: function(d) { return d.value; },
        showControls: false,
        showValues: true,
        // valueFormat: d3.format('d'),
        duration: 500,
        barColor: function (d, i) {
          if (d.key === 'CurrentBenefits') {
            if (d.key === 'Salary') {
              return '#5FAB44';
            }
            if (d.key === 'Salary') {
              return '#F1AC00';
            }
            if (d.key === 'Bonus') {
              return '#00A7A6';
            }
            if (d.key === '401K') {
              return '#CC0000';
            }
            if (d.key === 'Medical') {
              return '#1B7E7D';
            }
            if (d.key === 'Dental') {
              return '#2A8EFF';
            }
            if (d.key === 'HSA') {
              return '#6F84FF';
            }
            if (d.key === 'PTO') {
              return '#A54BFF';
            }
            if (d.key === 'Tuition') {
              return '#FF5F49';
            }
          } else {
            return '#808080';
          }
      },
        // groupSpacing: .5, // thin and thick the bar
        // xAxis: {
        //   axisLabel: 'Benefit Cost Amount',
        //   axisLabelDistance: 420, // move axisLabel position
        //   rotateLabel: 60,
        //   groupSpacing: 0.2
        // },
        yAxis: {
          axisLabel: 'Benefit Cost Amount ($)',
          tickValues: [250, 500, 750, 1000],
          axisLabelDistance: 10, // move axisLabel position
          tickFormat: function(d) {
            return d3.format('f')(d); // d3.format(',.2f')(d)
          }
        }
      }
    };

    this.barData.push(this.benefitsData);

    this.nvd3.chart.update();
  }

  pieView(): void {
    this.compareBenefits = false;
  }

  compare(): void {
    this.compareBenefits = true;
    this.comparisonBenefits.key = 'CompareBenefits';
    this.comparisonBenefits.values = [
      {
        key: 'something',
        y: 10000
      },
      {
        key: 'something',
        y: 10000
      }
    ];
    console.log(this.comparisonBenefits);

    this.nvd3.chart.update();
  }


}
