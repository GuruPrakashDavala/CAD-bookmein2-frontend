import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllStandsEventNamesComponent } from "./all-stands-event-names/all-stands-event-names.component";
import { AppComponent } from "./app.component";
import { AttendeeMessagesComponent } from "./attendee/attendee-messages.component";
import { BarChartAllTimeComponent } from "./attendee-all-bar-chart-timespent/bar-chart-all-time.component";
import { BarChartViewAllComponent } from "./attendee-all-bar-chart-registrations/bar-chart-view-all.component";
import { EventAttendeesCountComponent } from "./event-attendees-count/event-attendees-count.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "barchartall", component: BarChartViewAllComponent },
  { path: "barchartallbytime", component: BarChartAllTimeComponent },
  { path: "attendeemessages", component: AttendeeMessagesComponent },
  { path: "sessionsandattendees", component: EventAttendeesCountComponent },
  { path: "allstands", component:AllStandsEventNamesComponent },
  { path: "**", redirectTo: "/homepage" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
