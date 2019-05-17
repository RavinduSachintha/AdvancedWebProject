import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

declare var $: $;

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  dataSet = [
    { label: "Asia", data: 4119630000, color: "#005CDE" },
    { label: "Latin America", data: 590950000, color: "#00A36A" },
    { label: "Africa", data: 1012960000, color: "#7D0096" }
  ];

  constructor() {}

  ngOnInit() {
    this.drawPieChart1();
  }

  drawPieChart1() {
    // jquery codes
    $.plot($("#pieChart1"), this.dataSet, {
      series: {
        pie: {
          show: true,
          radius: 3 / 4,
          innerRadius: 1 / 4,
          label: {
            show: true,
            radius: 0.8,
            formatter: function(label, series) {
              return (
                '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' +
                label +
                " : " +
                Math.round(series.percent) +
                "%</div>"
              );
            },
            background: {
              opacity: 0.8,
              color: "#000"
            }
          }
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true
      }
    });
  }
}
