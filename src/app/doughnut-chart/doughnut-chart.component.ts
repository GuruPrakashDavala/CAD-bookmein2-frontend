import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"],
})
export class DoughnutChartComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  doughnutChartLabels: Label[] = [
    "Total Attendees Registered",
    "Total Attended",
  ];
  doughnutChartData: MultiDataSet = [[55, 25]];
  doughnutChartType: ChartType = "doughnut";
  ngOnInit() {
    let totalRegistered = [];
    this.service.getTotalAttendeesRegistered().subscribe((response) => {
      console.log(response);
      // this.doughnutChartData.push([response]);
    });
  }
}
