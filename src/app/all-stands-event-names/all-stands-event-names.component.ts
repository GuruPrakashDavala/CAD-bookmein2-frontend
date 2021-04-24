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
  selector: "app-all-stands-event-names",
  templateUrl: "./all-stands-event-names.component.html",
  styleUrls: ["./all-stands-event-names.component.css"],
})
export class AllStandsEventNamesComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  allStands = [];
  standsVisited: number;
  isChartLoaded: boolean = false;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit() {
    this.isChartLoaded = false;
    this.service.getStandsVisitedAndDuration().subscribe((response) => {
      console.log(response);
      this.allStands = response;
      this.standsVisited = response.length;
      for (let i = 0; i < response.length; i++) {
        this.pieChartLabels.push("" + response[i].eventid);
        this.pieChartData.push(response[i].totaltime / 6 / 60);
      }
      this.isChartLoaded = true;
    });
  }
}
