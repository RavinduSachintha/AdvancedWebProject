import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";
import { Router } from "@angular/router";

declare var $: $;

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  loadAPI: any;
  url1 = "assets/dist/js/custom.min.js";
  url2 = "assets/dist/js/sidebarmenu.js";

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
  }

  loadScript() {
    let node1 = document.createElement("script");
    node1.src = this.url1;
    node1.type = "text/javascript";
    node1.async = true;
    node1.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node1);

    let node2 = document.createElement("script");
    node2.src = this.url2;
    node2.type = "text/javascript";
    node2.async = true;
    node2.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node2);
  }
}
