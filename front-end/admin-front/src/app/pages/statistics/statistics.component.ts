import { Component, OnInit } from "@angular/core";
import { DynamicScriptLoaderService } from "src/app/services/dynamic-script-loader.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader
      .load(
        "matrix-interface",
        "excanvas",
        "flot",
        "flot-pie",
        "flot-time",
        "flot-stack",
        "flot-crosshair",
        "jquery-peity",
        "matrix-chart",
        "flot-tooltip",
        "turning-series",
        "chart-page-init"
      )
      .then(data => {
        // Script Loaded Successfully
      })
      .catch(error => console.log(error));
  }
}
