import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-bar-chart-time",
  templateUrl: "./bar-chart-time.component.html",
  styleUrls: ["./bar-chart-time.component.css"],
})
export class BarChartTimeComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  popularSessions: any;
  topSessions: number = 4;
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [];

  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: [], label: "Total Registrations" }];

  ngOnInit() {
    this.service.getPopularSessions().subscribe((response) => {
      this.popularSessions = response;
      console.log(response);
      for (let i = 0; i <= this.topSessions; i++) {
        this.barChartData[0].data.push(
          this.popularSessions[i].total_registrations
        );
        this.barChartLabels.push(this.popularSessions[i].event_id);
      }
      console.log(this.barChartData);
    });
  }
}
