import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-balance-overview',
  template: `
  <apx-chart [series]="series_" [chart]="chart_" [title]="title_"></apx-chart>
`,
  styles: []
})
export class BalanceOverviewComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  public series_!: ApexAxisChartSeries;
  public chart_!: ApexChart;
  public xaxis_!: ApexXAxis;
  public title_!: ApexTitleSubtitle;

  constructor() {

      this.series_= [
        {
          name: "Balance Overview",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ];
      this.chart_= {
        "height": 350,
        "type": "bar"
      };
      this.title_= {
        "text": "Balance Overview"
      };
      this.xaxis_= {
        "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      };
    };



}