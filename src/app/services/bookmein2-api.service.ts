import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class Bookmein2APIService {
  constructor(public http: HttpClient) {}

  getPopularSessions() {
    return this.http.get<[]>("http://localhost:3000/eventregistrations");
  }

  getPopularSessionsByTimeSpent() {
    return this.http.get<[]>("http://localhost:3000/geteventsbytotaltimespent");
  }

  getAttendeeDetails(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getattendeedetails/" + attendeeID
    );
  }

  getAllAttendeeMessages(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getallattendeesmessages/" + attendeeID
    );
  }

  getAllConversationBetweenAttendeeAndExhibitors(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getallexhibitorsanddelegatesconversation/" +
        attendeeID
    );
  }

  geetAllEventsofAttendee(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getalleventsattendedbyattendee/" + attendeeID
    );
  }
}
