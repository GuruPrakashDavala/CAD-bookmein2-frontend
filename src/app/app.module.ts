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

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, HttpClientModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}