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
  allAttendeeMsgs = [];
  allAttendeeExhibitorMsgs = [];
  attendeeDetails = [];
  enableErrorMessage: boolean = false;
  enableInvalidFormatErrorMessage: boolean = false;
  isNoRecordsAttendee: boolean = false;
  isNoRecordsExhibitor: boolean = false;
  isAttendeeUnAvailable: boolean = false;
  attendeeOption: string = "";

  ngOnInit() {}

  getAllAttendeeMessages() {
    if (!this.attendeeID) {
      //console.log(isNaN(this.attendeeID));
      this.enableErrorMessage = true;
      return false;
    }
    if (isNaN(this.attendeeID)) {
      console.log(isNaN(this.attendeeID));
      this.enableInvalidFormatErrorMessage = true;
      return false;
    }

    if (this.attendeeID) {
      this.allAttendeeMsgs = [];
      this.allAttendeeExhibitorMsgs = [];
      this.isAttendeeUnAvailable = false;
      this.isNoRecordsAttendee = false;
      this.isNoRecordsExhibitor = false;
      this.enableErrorMessage = false;
      this.enableInvalidFormatErrorMessage = false;

      this.service.getAttendeeDetails(this.attendeeID).subscribe((response) => {
        if (response.length == 0) {
          this.isAttendeeUnAvailable = true;
          return false;
        } else {
          this.attendeeDetails = response;
          console.log(this.attendeeDetails);
        }
      });

      switch (this.attendeeOption) {
        case "0":
          // console.log("0");
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
          // console.log("1");
          this.allAttendeeMsgs = [];
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
        case "All":
          // console.log("ALL");
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
          break;
      }
    }

    // if (this.attendeeID) {
    //   console.log(this.attendeeOption);
    //   this.isNoRecords = false;
    //   this.enableErrorMessage = false;
    //   this.service
    //     .getAllAttendeeMessages(this.attendeeID)
    //     .subscribe((response) => {
    //       if (response.length == 0) {
    //         this.isNoRecords = true;
    //         return false;
    //       } else {
    //         this.allAttendeeMsgs = response;
    //       }
    //     });
    //   if (this.attendeeID) {
    //     this.service
    //       .getAllConversationBetweenAttendeeAndExhibitors(this.attendeeID)
    //       .subscribe((response) => {
    //         // if (response.length == 0) {
    //         //   this.isNoRecords = true;
    //         //   return false;
    //         // } else {
    //         //   this.allAttendeeMsgs = response;
    //         // }
    //         console.log(response);
    //       });
    //   }
  }
}
