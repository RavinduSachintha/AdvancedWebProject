import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as $ from "jquery";

declare var $: $;

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    $(".left-sidebar").hover(
      function() {
        $(".navbar-header").addClass("expand-logo");
      },
      function() {
        $(".navbar-header").removeClass("expand-logo");
      }
    );

    var url = window.location + "";
    var path = url.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
    var element = $("ul#sidebarnav a").filter(function() {
      return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
    });
    element.parentsUntil(".sidebar-nav").each(function(index) {
      if ($(this).is("li") && $(this).children("a").length !== 0) {
        $(this)
          .children("a")
          .addClass("active");
        $(this).parent("ul#sidebarnav").length === 0
          ? $(this).addClass("active")
          : $(this).addClass("selected");
      } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
        $(this).addClass("selected");
      } else if ($(this).is("ul")) {
        $(this).addClass("in");
      }
    });

    element.addClass("active");
    $("#sidebarnav a").on("click", function(e) {
      if (!$(this).hasClass("active")) {
        // hide any open menus and remove all other classes
        $("ul", $(this).parents("ul:first")).removeClass("in");
        $("a", $(this).parents("ul:first")).removeClass("active");

        // open our new menu and add the open class
        $(this)
          .next("ul")
          .addClass("in");
        $(this).addClass("active");
      } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .parents("ul:first")
          .removeClass("active");
        $(this)
          .next("ul")
          .removeClass("in");
      }
    });
    $("#sidebarnav >li >a.has-arrow").on("click", function(e) {
      e.preventDefault();
    });
  }
}
