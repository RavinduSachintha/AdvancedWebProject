import { Component, OnInit, OnDestroy } from "@angular/core";

import * as $ from "jquery";
import { UserService } from "src/app/services/user.service";
import { WordService } from "src/app/services/word.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { CommentService } from "src/app/services/comment.service";
import { Subscription } from "rxjs";

declare var $: $;

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit, OnDestroy {
  // variable declaration
  num_of_reg_users: number;
  num_of_admins: number;
  num_of_words: number;
  num_of_suggestions: number;
  num_of_comments: number;
  num_of_active_words: number;
  num_of_inactive_words: number;
  num_of_complete_words: number;
  num_of_incomplete_words: number;
  num_of_complete_suggestions: number;
  num_of_incomplete_suggestions: number;

  // subscriptions references
  reg_users_subcri: Subscription;
  admins_subcri: Subscription;
  words_subcri: Subscription;
  suggestions_subcri: Subscription;
  comments_subcri: Subscription;
  words_active_subcri: Subscription;
  words_inactive_subcri: Subscription;
  words_complete_subcri: Subscription;
  words_incomplete_subcri: Subscription;
  suggestions_complete_subcri: Subscription;
  suggestions_incomplete_subcri: Subscription;

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

  // bar chart 1 data
  barChart1_dataSetCreator() {
    let data1 = [[0, this.num_of_active_words]];
    let data2 = [[0, this.num_of_inactive_words]];
    let data3 = [[1, this.num_of_complete_words]];
    let data4 = [[1, this.num_of_incomplete_words]];
    return [
      { label: "Active", data: data1, color: "#5482FF" },
      { label: "Inactive", data: data2, color: "#FFBB54" },
      { label: "Complete", data: data3, color: "#82FF54" },
      { label: "Incomplete", data: data4, color: "#CCAA99" }
    ];
  }

  // bar chart 2 data
  barChart2_dataSetCreator() {
    let data1 = [[0, this.num_of_complete_suggestions]];
    let data2 = [[1, this.num_of_incomplete_suggestions]];
    return [
      { label: "Active", data: data1, color: "#5482FF" },
      { label: "Inactive", data: data2, color: "#FFBB54" }
    ];
  }

  // bar chart 1 ticks
  barChart1_ticksSetCreator() {
    return [[0, "Activity"], [1, "Completeness"]];
  }

  // bar chart 2 ticks
  barChart2_ticksSetCreator() {
    return [[0, "Complete"], [1, "Incomplete"]];
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

  // bar chart 1 options
  barChart1_opt = {
    series: {
      stack: true,
      bars: {
        show: true
      }
    },
    bars: {
      align: "center",
      barWidth: 0.5
    },
    xaxis: {
      mode: "categories",
      axisLabel: "Statistical Variables",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: "Verdana, Arial",
      axisLabelPadding: 10,
      autoscaleMargin: 0.1,
      tickLength: 0,
      ticks: this.barChart1_ticksSetCreator()
    },
    yaxis: {
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: "Verdana, Arial",
      axisLabelPadding: 3,
      tickDecimals: false,
      tickFormatter: function(v, axis) {
        return v;
      }
    },
    legend: {
      noColumns: 1,
      labelBoxBorderColor: "#000000",
      position: "nw"
    },
    grid: {
      hoverable: true,
      borderWidth: 2,
      backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
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

  // bar chart 2 options
  barChart2_opt = {
    series: {
      stack: true,
      bars: {
        show: true
      }
    },
    bars: {
      align: "center",
      barWidth: 0.5
    },
    xaxis: {
      mode: "categories",
      axisLabel: "Statistical Variables",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: "Verdana, Arial",
      axisLabelPadding: 10,
      autoscaleMargin: 0.1,
      tickLength: 0,
      ticks: this.barChart2_ticksSetCreator()
    },
    yaxis: {
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: "Verdana, Arial",
      axisLabelPadding: 3,
      tickDecimals: false,
      tickFormatter: function(v, axis) {
        return v;
      }
    },
    legend: {
      show: false
    },
    grid: {
      hoverable: true,
      borderWidth: 2,
      backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
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
    this.num_of_words = 1;
    this.num_of_suggestions = 1;
    this.num_of_comments = 1;
    this.num_of_active_words = 1;
    this.num_of_inactive_words = 1;
    this.num_of_complete_words = 1;
    this.num_of_incomplete_words = 1;
    this.num_of_complete_suggestions = 1;
    this.num_of_incomplete_suggestions = 1;

    this.isLoaded = false;
  }

  ngOnInit() {
    this.dataInitializer();
  }

  ngOnDestroy() {
    this.reg_users_subcri.unsubscribe();
    this.admins_subcri.unsubscribe();
    this.words_subcri.unsubscribe();
    this.suggestions_subcri.unsubscribe();
    this.comments_subcri.unsubscribe();
    this.words_active_subcri.unsubscribe();
    this.words_inactive_subcri.unsubscribe();
    this.words_complete_subcri.unsubscribe();
    this.words_incomplete_subcri.unsubscribe();
    this.suggestions_complete_subcri.unsubscribe();
    this.suggestions_incomplete_subcri.unsubscribe();
  }

  // plot charts
  plotChart(
    id: string,
    data: { label: string; data: any; color: string }[],
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
      num_of_words: false,
      num_of_suggestions: false,
      num_of_comments: false,
      num_of_active_words: false,
      num_of_inactive_words: false,
      num_of_complete_words: false,
      num_of_incomplete_words: false,
      num_of_complete_suggestions: false,
      num_of_incomplete_suggestions: false
    };

    let plot1 = this.plotChart(
      "pieChart1",
      this.pieChart1_dataSetCreator(),
      this.pieChart1_opt
    );

    let plot2 = this.plotChart(
      "pieChart2",
      this.pieChart2_dataSetCreator(),
      this.pieChart2_opt
    );

    let plot3 = this.plotChart(
      "barChart1",
      this.barChart1_dataSetCreator(),
      this.barChart1_opt
    );

    let plot4 = this.plotChart(
      "barChart2",
      this.barChart2_dataSetCreator(),
      this.barChart2_opt
    );

    this.reg_users_subcri = this.userService.getNumberOfRegUsers().subscribe(
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

    this.admins_subcri = this.userService.getNumberOfAdmins().subscribe(
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

    this.words_subcri = this.wordService.getNumberOfWords().subscribe(
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

    this.words_active_subcri = this.wordService
      .getNumberOfActiveWords()
      .subscribe(
        (count: any) => {
          this.num_of_active_words = count.data;
          plot3.setData(this.barChart1_dataSetCreator());
          plot3.draw();
          loaded["num_of_active_words"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.words_inactive_subcri = this.wordService
      .getNumberOfInactiveWords()
      .subscribe(
        (count: any) => {
          this.num_of_inactive_words = count.data;
          plot3.setData(this.barChart1_dataSetCreator());
          plot3.draw();
          loaded["num_of_inactive_words"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.words_complete_subcri = this.wordService
      .getNumberOfCompleteWords()
      .subscribe(
        (count: any) => {
          this.num_of_complete_words = count.data;
          plot3.setData(this.barChart1_dataSetCreator());
          plot3.draw();
          loaded["num_of_complete_words"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.words_incomplete_subcri = this.wordService
      .getNumberOfIncompleteWords()
      .subscribe(
        (count: any) => {
          this.num_of_incomplete_words = count.data;
          plot3.setData(this.barChart1_dataSetCreator());
          plot3.draw();
          loaded["num_of_incomplete_words"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.suggestions_subcri = this.suggestionService
      .getNumberOfSuggestions()
      .subscribe(
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

    this.suggestions_complete_subcri = this.suggestionService
      .getNumberOfCompleteSuggestions()
      .subscribe(
        (count: any) => {
          this.num_of_complete_suggestions = count.data;
          plot4.setData(this.barChart2_dataSetCreator());
          plot4.draw();
          loaded["num_of_complete_suggestions"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.suggestions_incomplete_subcri = this.suggestionService
      .getNumberOfIncompleteSuggestions()
      .subscribe(
        (count: any) => {
          this.num_of_incomplete_suggestions = count.data;
          plot4.setData(this.barChart2_dataSetCreator());
          plot4.draw();
          loaded["num_of_incomplete_suggestions"] = true;
          this.checkLoading(loaded);
        },
        error => {
          console.log(error);
        }
      );

    this.comments_subcri = this.commentService.getNumberOfComments().subscribe(
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
    $(".pie, .bars").css("visibility", "visible");
  }
}
