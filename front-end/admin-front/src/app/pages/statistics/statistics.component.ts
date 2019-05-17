import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";
import { UserService } from "src/app/services/user.service";

declare var $: $;

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  // variable declaration
  num_of_reg_users: number = null;
  num_of_admins: number = null;
  num_of_active_users: number = null;

  // pie chart 1 options
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
      content: "%y.0, %s",
      shifts: {
        x: 20,
        y: 0
      },
      defaultTheme: false
    }
  };

  // pie chart 2 options
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
      content: "%y.0, %s",
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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataInitializer();
  }

  // plot the pie chart
  plotPieChart(
    id: string,
    data: { label: string; data: number; color: string }[],
    opt: {}
  ) {
    // jquery code
    let plot = $.plot($("#" + id), data, opt);
    $(".legend table td.legendLabel").css({
      "font-size": "12px",
      "font-weight": "bold",
      "padding-left": "5px"
    });

    return plot;
  }

  dataInitializer() {
    let pieChart1_dataSet = [
      { label: "Words", data: 4119630000, color: "#005CDE" },
      { label: "Suggetions", data: 590950000, color: "#00A36A" },
      { label: "Comments", data: 1012960000, color: "#7D0096" }
    ];

    let pieChart2_dataSet = [
      {
        label: "Registered Users",
        data: this.num_of_reg_users,
        color: "#44BBDE"
      },
      { label: "Administrative Users", data: 4, color: "#00556A" }
    ];

    let plot1 = this.plotPieChart(
      "pieChart1",
      pieChart1_dataSet,
      this.pieChart1_opt
    );
    let plot2 = this.plotPieChart(
      "pieChart2",
      pieChart2_dataSet,
      this.pieChart2_opt
    );
    
    this.userService.getNumberOfRegUsers().subscribe(
      (count: any) => {
        this.num_of_reg_users = count.data;

        let pieChart2new_dataSet = [
          {
            label: "Registered Users",
            data: this.num_of_reg_users,
            color: "#44BBDE"
          },
          { label: "Administrative Users", data: 4, color: "#00556A" }
        ];

        plot2.setData(pieChart2new_dataSet);
        plot2.draw();
      },
      error => {
        console.log(error);
      }
    );
  }
}
