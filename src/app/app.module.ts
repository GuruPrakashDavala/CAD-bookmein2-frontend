import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";

import { ChartsModule, ThemeService } from "ng2-charts";
import { BubbleChartComponent } from "./bubble-chart/bubble-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";
import { BarChartViewAllComponent } from './bar-chart-view-all/bar-chart-view-all.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AttendeeMessagesComponent } from './attendee-messages/attendee-messages.component';
import { FormsModule } from "@angular/forms";
import { BarChartTimeComponent } from './bar-chart-time/bar-chart-time.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, HttpClientModule, FormsModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
