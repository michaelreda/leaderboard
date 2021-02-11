import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { AddScoreComponent } from "./add-score/add-score.component";
import { LeaderboardTableComponent } from "./leaderboard-table/leaderboard-table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddScoreComponent,
    LeaderboardTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
