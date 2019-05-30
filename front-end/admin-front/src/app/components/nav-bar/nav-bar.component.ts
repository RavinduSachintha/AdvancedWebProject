import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

import * as $ from "jquery";

declare var $: $;

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // this is for close icon when navigation open in mobile view
    $(".nav-toggler").on("click", function() {
      $("#main-wrapper").toggleClass("show-sidebar");
      $(".nav-toggler i").toggleClass("ti-menu");
    });
    $(".nav-lock").on("click", function() {
      $("body").toggleClass("lock-nav");
      $(".nav-lock i").toggleClass("mdi-toggle-switch-off");
      $("body, .page-wrapper").trigger("resize");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on(
      "click",
      function() {
        $(".app-search").toggle(200);
        $(".app-search input").focus();
      }
    );

    //****************************
    /* This is for sidebartoggler*/
    //****************************
    $(".sidebartoggler").on("click", function() {
      $("#main-wrapper").toggleClass("mini-sidebar");
      if ($("#main-wrapper").hasClass("mini-sidebar")) {
        $(".sidebartoggler").prop("checked", !0);
        $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
      } else {
        $(".sidebartoggler").prop("checked", !1);
        $("#main-wrapper").attr("data-sidebartype", "full");
      }
    });
  }

  logout() {
    this.authService.logoutAdmin();
  }
}
