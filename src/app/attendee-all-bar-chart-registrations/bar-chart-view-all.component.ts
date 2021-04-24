import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-bar-chart-view-all",
  templateUrl: "./bar-chart-view-all.component.html",
  styleUrls: ["./bar-chart-view-all.component.css"],
})
export class BarChartViewAllComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  popularSessions: any;
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
      console.log(response.length);
      for (let i = 0; i < response.length; i++) {
        this.barChartData[0].data.push(
          this.popularSessions[i].total_registrations
        );
        this.barChartLabels.push(this.popularSessions[i].event_id);
      }
      console.log(this.barChartData);
    });
  }
}
