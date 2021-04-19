import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarChartViewAllComponent } from "./bar-chart-view-all/bar-chart-view-all.component";

const routes: Routes = [
  { path: "barchartall", component: BarChartViewAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
