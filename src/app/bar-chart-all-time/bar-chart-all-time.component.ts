import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-bar-chart-all-time",
  templateUrl: "./bar-chart-all-time.component.html",
  styleUrls: ["./bar-chart-all-time.component.css"],
})
export class BarChartAllTimeComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  popularSessions = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [];

  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: [], label: "Total Hours" }];

  ngOnInit() {
    this.service.getPopularSessionsByTimeSpent().subscribe((response) => {
      this.popularSessions = response;
      console.log(response);
      for (let i = 0; i <= response.length; i++) {
        this.barChartData[0].data.push(
          this.popularSessions[i].totaltime / 6 / 60
        );
        this.barChartLabels.push(this.popularSessions[i].eventid);
      }
      console.log(this.barChartData);
    });
  }
}
