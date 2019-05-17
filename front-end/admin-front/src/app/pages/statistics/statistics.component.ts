import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

declare var $: $;

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  // pie chart 1 data and options
  pieChart1_dataSet = [
    { label: "Words", data: 4119630000, color: "#005CDE" },
    { label: "Suggetions", data: 590950000, color: "#00A36A" },
    { label: "Comments", data: 1012960000, color: "#7D0096" }
  ];

  pieChart1_opt = {
    series: {
      pie: {
        show: true,
        radius: 0.9,
        innerRadius: 1 / 4,
        label: {
          show: true,
          radius: 0.7,
          formatter: function(label, series) {
            return (
              '<h4 class="font-weight-bold text-center text-white">' +
              Math.round(series.percent) +
              "%</h4>"
            );
          }
        }
      }
    },
    legend: {
      show: true
    },
    grid: {
      hoverable: true
    },
    tooltip: true,
    tooltipOpts: {
      cssClass: "flotTip",
      content: "%p.0%, %s",
      shifts: {
        x: 20,
        y: 0
      },
      defaultTheme: false
    }
  };

  // pie chart 2 data and options
  pieChart2_dataSet = [
    { label: "Registered Users", data: 4119630000, color: "#44BBDE" },
    { label: "Administrative Users", data: 590950000, color: "#00556A" }
  ];

  pieChart2_opt = {
    series: {
      pie: {
        show: true,
        radius: 0.9,
        innerRadius: 1 / 4,
        label: {
          show: true,
          radius: 0.7,
          formatter: function(label, series) {
            return (
              '<h4 class="font-weight-bold text-center text-white">' +
              Math.round(series.percent) +
              "%</h4>"
            );
          }
        }
      }
    },
    legend: {
      show: true
    },
    grid: {
      hoverable: true
    },
    tooltip: true,
    tooltipOpts: {
      cssClass: "flotTip",
      content: "%p.0%, %s",
      shifts: {
        x: 20,
        y: 0
      },
      defaultTheme: false
    }
  };

  // breadcrumbs = [
  //   { title: "Statistics", link: "/statistics", active: true },
  //   { title: "Test01", link: "/test01", active: true },
  //   { title: "Test02", link: "/test02", active: false }
  // ];

  constructor() {}

  ngOnInit() {
    this.plotPieChart("pieChart1", this.pieChart1_dataSet, this.pieChart1_opt);
    this.plotPieChart("pieChart2", this.pieChart2_dataSet, this.pieChart2_opt);
  }

  plotPieChart(
    id: string,
    data: { label: string; data: number; color: string }[],
    opt: {}
  ) {
    // jquery code
    $.plot($("#" + id), data, opt);
    $(".legend table td.legendLabel").css({
      "font-size": "12px",
      "font-weight": "bold",
      "padding-left": "5px"
    });
  }
}
