import { Component, OnInit } from "@angular/core";
import { Bookmein2APIService } from "../services/bookmein2-api.service";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from "ng2-charts";

@Component({
  selector: "app-attendee-messages",
  templateUrl: "./attendee-messages.component.html",
  styleUrls: ["./attendee-messages.component.css"],
})
export class AttendeeMessagesComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  attendeeID: number;
  allAttendeeMsgs = [];
  allAttendeeExhibitorMsgs = [];
  attendeeDetails = [];
  attendeeEvents = [];
  totalTimeSpentByAttendee: number = 0;
  enableErrorMessage: boolean = false;
  enableInvalidFormatErrorMessage: boolean = false;
  isNoRecordsAttendee: boolean = false;
  isNoRecordsExhibitor: boolean = false;
  isAttendeeUnAvailable: boolean = false;
  isNoEventsFound: boolean = false;
  optionNotSelected: boolean = false;
  attendeeOption: string = "";

  ngOnInit() {}

  getAllAttendeeMessages() {
    if (!this.attendeeID) {
      this.enableInvalidFormatErrorMessage = false;
      this.enableErrorMessage = true;
      return false;
    }

    if (isNaN(this.attendeeID)) {
      console.log(isNaN(this.attendeeID));
      this.enableErrorMessage = false;
      this.enableInvalidFormatErrorMessage = true;
      return false;
    }

    if (this.attendeeOption == "") {
      this.optionNotSelected = true;
      return false;
    }

    if (this.attendeeID) {
      this.allAttendeeMsgs = [];
      this.allAttendeeExhibitorMsgs = [];
      this.isAttendeeUnAvailable = false;
      this.isNoRecordsAttendee = false;
      this.isNoRecordsExhibitor = false;
      this.isNoEventsFound = false;
      this.enableErrorMessage = false;
      this.enableInvalidFormatErrorMessage = false;
      this.optionNotSelected = false;

      this.service.getAttendeeDetails(this.attendeeID).subscribe((response) => {
        if (response.length == 0) {
          //console.log(response);
          this.isAttendeeUnAvailable = true;
          this.allAttendeeMsgs = [];
          this.allAttendeeExhibitorMsgs = [];
          this.attendeeEvents = [];
          return false;
        } else {
          this.attendeeDetails = response;
          this.getAllAttendeeMessagesByType();
        }
      });
    }
  }

  getAllAttendeeMessagesByType() {
    switch (this.attendeeOption) {
      case "0":
        console.log("0");
        this.allAttendeeExhibitorMsgs = [];
        this.attendeeEvents = [];
        this.service
          .getAllAttendeeMessages(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoRecordsAttendee = true;
              return false;
            } else {
              this.allAttendeeMsgs = response;
              console.log(this.allAttendeeMsgs);
            }
          });
        break;
      case "1":
        this.allAttendeeMsgs = [];
        this.attendeeEvents = [];
        this.service
          .getAllConversationBetweenAttendeeAndExhibitors(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoRecordsExhibitor = true;
              return false;
            } else {
              this.allAttendeeExhibitorMsgs = response;
            }
            console.log(response);
          });
        break;
      case "2":
        this.allAttendeeMsgs = [];
        this.allAttendeeExhibitorMsgs = [];
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.totalTimeSpentByAttendee = 0;
        this.service
          .geetAllEventsofAttendee(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoEventsFound = true;
              return false;
            } else {
              this.attendeeEvents = response;
              console.log(response);
              for (let i = 0; i < response.length; i++) {
                this.pieChartLabels.push(this.attendeeEvents[i].eventid);
                this.pieChartData.push(this.attendeeEvents[i].totaltimespent);
                this.totalTimeSpentByAttendee += this.attendeeEvents[
                  i
                ].totaltimespent;
              }
              console.log(this.pieChartData);
              console.log(this.pieChartLabels);
            }
          });
        break;
      case "All":
        this.allAttendeeMsgs = [];
        this.allAttendeeExhibitorMsgs = [];
        this.attendeeEvents = [];
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.totalTimeSpentByAttendee = 0;
        this.service
          .getAllAttendeeMessages(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoRecordsAttendee = true;
              return false;
            } else {
              this.allAttendeeMsgs = response;
              console.log(this.allAttendeeMsgs);
            }
          });

        this.service
          .getAllConversationBetweenAttendeeAndExhibitors(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoRecordsExhibitor = true;
              return false;
            } else {
              this.allAttendeeExhibitorMsgs = response;
            }
            console.log(response);
          });

        this.service
          .geetAllEventsofAttendee(this.attendeeID)
          .subscribe((response) => {
            if (response.length == 0) {
              this.isNoEventsFound = true;
              return false;
            } else {
              this.attendeeEvents = response;
              console.log(response);
              for (let i = 0; i < response.length; i++) {
                this.pieChartLabels.push(this.attendeeEvents[i].eventid);
                this.pieChartData.push(this.attendeeEvents[i].totaltimespent);
                this.totalTimeSpentByAttendee += this.attendeeEvents[
                  i
                ].totaltimespent;
              }
              console.log(this.pieChartData);
              console.log(this.pieChartLabels);
            }
          });

        break;
    }
  }
}
