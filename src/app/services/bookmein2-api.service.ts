import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class Bookmein2APIService {
  constructor(public http: HttpClient) {}

  //API for popular sessions based on registrations
  getPopularSessions() {
    return this.http.get<[]>("http://localhost:3000/eventregistrations");
  }

  //API for popular sessions based on total time spent
  getPopularSessionsByTimeSpent() {
    return this.http.get<[]>("http://localhost:3000/geteventsbytotaltimespent");
  }

  //API to get single attendee details based on the route param
  getAttendeeDetails(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getattendeedetails/" + attendeeID
    );
  }

  //API to get all attendee-attendee conversations - based on the route param
  //Get All messages by attendeeID
  getAllAttendeeMessages(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getallattendeesmessages/" + attendeeID
    );
  }

  //API to get all conversation between attendee and exhibior - based on the route param
  //Get All messages by attendeeID
  getAllConversationBetweenAttendeeAndExhibitors(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getallexhibitorsanddelegatesconversation/" +
        attendeeID
    );
  }

  //API to fetch all events attended by attendee - based on the route param
  geetAllEventsofAttendee(attendeeID: number) {
    return this.http.get<[]>(
      "http://localhost:3000/getalleventsattendedbyattendee/" + attendeeID
    );
  }

  //API to get total attendees registered
  getTotalAttendeesRegistered() {
    return this.http.get<[{ totalregistrations: number }]>(
      "http://localhost:3000/totalregistered"
    );
  }

  //API to get total attendees attended
  getTotalAttendeesAttended() {
    return this.http.get<[{ totalattended: number }]>(
      "http://localhost:3000/totalattended"
    );
  }

  //Total Attendees Grouped By Event ID
  getTotalAttendeesByEventID() {
    return this.http.get<[]>("http://localhost:3000/attendeesgroupedbyeventid");
  }

  //API to get total stands visited and duration spent
  getStandsVisitedAndDuration() {
    return this.http.get<[{ eventid: number; totaltime: number }]>(
      "http://localhost:3000/standsvisitedandduration"
    );
  }
}
