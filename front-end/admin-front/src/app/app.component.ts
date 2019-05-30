import { Component } from "@angular/core";
import { Router } from "@angular/router";

import * as $ from "jquery";

declare var $: $;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    $(".preloader").fadeOut();

    //****************************
    /* This is for the mini-sidebar if width is less then 1170*/
    //****************************
    var setsidebartype = function() {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      if (width < 1170) {
        $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
      } else {
        $("#main-wrapper").attr("data-sidebartype", "full");
      }
    };
    $(window).ready(setsidebartype);
    $(window).on("resize", setsidebartype);

    // ==============================================================
    // Resize all elements
    // ==============================================================
    $("body, .page-wrapper").trigger("resize");
    $(".page-wrapper")
      .delay(20)
      .show();

    //****************************
    /* This is for sidebartoggler*/
    //****************************
    // $(".sidebartoggler").on("click", function() {
    //   $("#main-wrapper").toggleClass("mini-sidebar");
    //   if ($("#main-wrapper").hasClass("mini-sidebar")) {
    //     $(".sidebartoggler").prop("checked", !0);
    //     $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    //   } else {
    //     $(".sidebartoggler").prop("checked", !1);
    //     $("#main-wrapper").attr("data-sidebartype", "full");
    //   }
    // });
  }

  // check for login router
  isLoginRouter() {
    return this.router.url == "/login";
  }
}
