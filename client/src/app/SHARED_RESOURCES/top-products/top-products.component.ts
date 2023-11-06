import { Component } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";


@Component({
  selector: 'app-top-products',
  template: `
  <apx-chart
    [series]="this.series_"
    [chart]="this.chart_"
    [labels]="this.labels_"
    [responsive]="this.responsive_"
  ></apx-chart>
  `,
  styles: []
})
export class TopProductsComponent {

  public series_!: ApexNonAxisChartSeries;
  public chart_!: ApexChart;
  public responsive_!: ApexResponsive[];
  public labels_!: any;

  constructor(){
  this.series_= [44, 36, 20];
  this.chart_ = {
        type: "donut"
      };
  this.labels_= ["Men","Electronics","Women"];
  this.responsive_= [
        {
          "breakpoint": 480,
           "options": {
            "chart": {
              "width": 250
            },
            "legend": {
              "position": "bottom"
            }
          }
        }
      ]
    };
}
