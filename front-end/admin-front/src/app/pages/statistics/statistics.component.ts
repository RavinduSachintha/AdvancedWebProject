import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";
import { UserService } from "src/app/services/user.service";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { CommentService } from 'src/app/services/comment.service';

declare var $: $;

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  // variable declaration
  num_of_reg_users: number;
  num_of_admins: number;
  num_of_active_users: number;
  num_of_words: number;
  num_of_suggestions: number;
  num_of_comments: number;

  isLoaded: boolean;

  // pie chart 1 data
  pieChart1_dataSetCreator() {
    return [
      { label: "Words", data: this.num_of_words, color: "#005CDE" },
      { label: "Suggetions", data: this.num_of_suggestions, color: "#00A36A" },
      { label: "Comments", data: this.num_of_comments, color: "#7D0096" }
    ];
  }

  // pie chart 2 data
  pieChart2_dataSetCreator() {
    return [
      {
        label: "Registered Users",
        data: this.num_of_reg_users,
        color: "#44BBDE"
      },
      {
        label: "Administrative Users",
        data: this.num_of_admins,
        color: "#00556A"
      }
    ];
  }

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

  constructor(
    private userService: UserService,
    private wordService: WordService,
    private suggestionService: SuggestionService,
    private commentService: CommentService
  ) {
    this.num_of_reg_users = 1;
    this.num_of_admins = 1;
    this.num_of_active_users = 1;
    this.num_of_words = 1;
    this.num_of_suggestions = 1;
    this.num_of_comments = 1;

    this.isLoaded = false;
  }

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

  // pie chart data initialiing and rendering
  dataInitializer() {
    const loaded = {
      num_of_reg_users: false,
      num_of_admins: false,
      // num_of_active_users: false,
      num_of_words: false,
      num_of_suggestions: false,
      num_of_comments: false
    };

    let plot1 = this.plotPieChart(
      "pieChart1",
      this.pieChart1_dataSetCreator(),
      this.pieChart1_opt
    );
    let plot2 = this.plotPieChart(
      "pieChart2",
      this.pieChart2_dataSetCreator(),
      this.pieChart2_opt
    );

    this.userService.getNumberOfRegUsers().subscribe(
      (count: any) => {
        this.num_of_reg_users = count.data;
        plot2.setData(this.pieChart2_dataSetCreator());
        plot2.draw();
        loaded["num_of_reg_users"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.userService.getNumberOfAdmins().subscribe(
      (count: any) => {
        this.num_of_admins = count.data;
        plot2.setData(this.pieChart2_dataSetCreator());
        plot2.draw();
        loaded["num_of_admins"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.wordService.getNumberOfWords().subscribe(
      (count: any) => {
        this.num_of_words = count.data;
        plot1.setData(this.pieChart1_dataSetCreator());
        plot1.draw();
        loaded["num_of_words"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.suggestionService.getNumberOfSuggestions().subscribe(
      (count: any) => {
        this.num_of_suggestions = count.data;
        plot1.setData(this.pieChart1_dataSetCreator());
        plot1.draw();
        loaded["num_of_suggestions"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );

    this.commentService.getNumberOfComments().subscribe(
      (count: any) => {
        this.num_of_comments = count.data;
        plot1.setData(this.pieChart1_dataSetCreator());
        plot1.draw();
        loaded["num_of_comments"] = true;
        this.checkLoading(loaded);
      },
      error => {
        console.log(error);
      }
    );
  }

  checkLoading(loaded: {}) {
    for (let item in loaded) {
      if (!loaded[item]) {
        return;
      }
    }
    $(".pie").css("visibility", "visible");
  }
}
