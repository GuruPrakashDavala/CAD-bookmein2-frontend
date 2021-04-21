import { Component, OnInit } from "@angular/core";
import { Bookmein2APIService } from "../services/bookmein2-api.service";

@Component({
  selector: "app-event-attendees-count",
  templateUrl: "./event-attendees-count.component.html",
  styleUrls: ["./event-attendees-count.component.css"],
})
export class EventAttendeesCountComponent implements OnInit {
  constructor(public service: Bookmein2APIService) {}
  totalAttendeesBySession = [];
  ngOnInit() {
    this.service.getTotalAttendeesByEventID().subscribe((response) => {
      this.totalAttendeesBySession = response;
      console.log(response);
    });
  }
}
