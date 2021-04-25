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
  isChartDataLoaded: boolean = false;
  totalRegistered = [];
  constructor(public service: Bookmein2APIService) {}
  doughnutChartLabels: Label[] = [
    "Total Attendees Registered",
    "Total Attended",
  ];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = "doughnut";
  ngOnInit() {
    this.isChartDataLoaded = false;

    this.service.getTotalAttendeesRegistered().subscribe((response) => {
      this.totalRegistered.push(response[0].totalregistrations);
      this.service.getTotalAttendeesAttended().subscribe((response) => {
        this.totalRegistered.push(response[0].totalattended);
        this.doughnutChartData = this.totalRegistered;
        this.isChartDataLoaded = true;
        console.log(this.totalRegistered);
      });
    });
  }
}
