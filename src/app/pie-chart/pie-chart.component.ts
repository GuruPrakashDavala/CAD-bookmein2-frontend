import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  standsVisited: number;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit() {
    this.service.getStandsVisitedAndDuration().subscribe((response) => {
      console.log(response);
      this.standsVisited = response.length;
      for (let i = 0; i < response.length; i++) {
        this.pieChartLabels.push("" + response[i].eventid);
        this.pieChartData.push(response[i].totaltime / 6 / 60);
      }
    });
  }
}
