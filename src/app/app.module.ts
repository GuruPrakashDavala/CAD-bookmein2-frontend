import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BarChartComponent } from "./attendee-bar-chart-registrations/bar-chart.component";
import { ChartsModule, ThemeService } from "ng2-charts";
import { BubbleChartComponent } from "./bubble-chart/bubble-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./stands-visited-timespent/pie-chart.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "./attendees-attended-registered/doughnut-chart.component";
import { BarChartViewAllComponent } from "./attendee-all-bar-chart-registrations/bar-chart-view-all.component";
import { HeaderComponent } from "./header/header.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FooterComponent } from "./footer/footer.component";
import { AttendeeMessagesComponent } from "./attendee/attendee-messages.component";
import { FormsModule } from "@angular/forms";
import { BarChartTimeComponent } from "./attendee-bar-chart-timespent/bar-chart-time.component";
import { BarChartAllTimeComponent } from "./attendee-all-bar-chart-timespent/bar-chart-all-time.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventAttendeesCountComponent } from "./event-attendees-count/event-attendees-count.component";
import { AllStandsEventNamesComponent } from "./all-stands-event-names/all-stands-event-names.component";

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    BarChartViewAllComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AttendeeMessagesComponent,
    BarChartTimeComponent,
    BarChartAllTimeComponent,
    EventDetailsComponent,
    EventAttendeesCountComponent,
    AllStandsEventNamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
