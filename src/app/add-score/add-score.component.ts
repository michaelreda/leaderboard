import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-score",
  templateUrl: "./add-score.component.html",
  styleUrls: ["./add-score.component.css"]
})
export class AddScoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  urlChanged(e) {
    // console.log(e);
    var iframe = document.getElementsByTagName("iframe")[0];
    if (iframe.getAttribute("src").indexOf("round_add") == -1) {
      window.location.href = "/";
    }
  }
}
