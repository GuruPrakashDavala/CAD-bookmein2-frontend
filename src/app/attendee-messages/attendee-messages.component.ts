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
  ngOnInit() {}

  getAllAttendeeMessages() {
    this.service
      .getAllAttendeeMessages(this.attendeeID)
      .subscribe((response) => {
        this.allAttendeeMsgs = response;
        console.log(this.allAttendeeMsgs);
      });
  }
}
