import { Component, OnInit } from "@angular/core";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-attendee-messages",
  templateUrl: "./attendee-messages.component.html",
  styleUrls: ["./attendee-messages.component.css"],
})
export class AttendeeMessagesComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  attendeeID: number;
  allAttendeeMsgs: any;
  enableErrorMessage: boolean = false;
  isNoRecords: boolean = false;
  ngOnInit() {}

  getAllAttendeeMessages() {
    if (!this.attendeeID) {
      this.enableErrorMessage = true;
      return false;
    }
    if (this.attendeeID) {
      this.isNoRecords = false;
      this.enableErrorMessage = false;
      this.service
        .getAllAttendeeMessages(this.attendeeID)
        .subscribe((response) => {
          if (response.length == 0) {
            this.isNoRecords = true;
            return false;
          } else {
            this.allAttendeeMsgs = response;
          }
        });

      this.service
        .getAllConversationBetweenAttendeeAndExhibitors(this.attendeeID)
        .subscribe((response) => {
          // if (response.length == 0) {
          //   this.isNoRecords = true;
          //   return false;
          // } else {
          //   this.allAttendeeMsgs = response;
          // }
          console.log(response);
        });
    }
  }
}
