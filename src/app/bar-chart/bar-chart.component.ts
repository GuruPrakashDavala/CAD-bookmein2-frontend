import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  popularSessions: any;
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [
    "Apple",
    "Banana",
    "Kiwifruit",
    "Blueberry",
    "Orange",
    "Grapes",
  ];

  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: "Best Fruits" },
  ];

  ngOnInit() {
    this.popularSessions = this.service
      .getPopularSessions()
      .subscribe((response) => {
        console.log(response);
      });
    console.log(this.popularSessions);
  }
}
