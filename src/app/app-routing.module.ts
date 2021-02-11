import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { AddScoreComponent } from "./add-score/add-score.component";
import { LeaderboardTableComponent } from "./leaderboard-table/leaderboard-table.component";

const routes: Routes = [
  { path: "", component: LeaderboardTableComponent },
  { path: "add-score", component: AddScoreComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
