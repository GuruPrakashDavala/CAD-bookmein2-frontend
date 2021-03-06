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
  selector: "app-event-attendees-count",
  templateUrl: "./event-attendees-count.component.html",
  styleUrls: ["./event-attendees-count.component.css"],
})
export class EventAttendeesCountComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
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

  totalAttendeesBySession = [];
  ngOnInit() {
    this.isChartLoaded = false;
    let totalAttendees = [];
    this.service.getTotalAttendeesByEventID().subscribe((response) => {
      this.totalAttendeesBySession = response;
      totalAttendees = response;
      for (let i = 0; i < response.length; i++) {
        this.pieChartLabels.push("" + totalAttendees[i].eventid);
        this.pieChartData.push(totalAttendees[i].totalAttended);
      }
      this.isChartLoaded = true;
      console.log(response);
    });
  }
}
