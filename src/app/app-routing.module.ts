import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AttendeeMessagesComponent } from "./attendee-messages/attendee-messages.component";
import { BarChartAllTimeComponent } from "./bar-chart-all-time/bar-chart-all-time.component";
import { BarChartViewAllComponent } from "./bar-chart-view-all/bar-chart-view-all.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "barchartall", component: BarChartViewAllComponent },
  { path: "barchartallbytime", component: BarChartAllTimeComponent },
  { path: "attendeemessages", component: AttendeeMessagesComponent },
  { path: "**", redirectTo: "/homepage" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
