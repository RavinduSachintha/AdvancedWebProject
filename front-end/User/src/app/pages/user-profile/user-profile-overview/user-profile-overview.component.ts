import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-user-profile-overview',
  templateUrl: './user-profile-overview.component.html',
  styleUrls: ['./user-profile-overview.component.css']
})
export class UserProfileOverviewComponent implements OnInit {

  LineChart = [];

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: ["Janu", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
     datasets: [{
         label: 'Number of Items Sold in Months',
         data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     }]
    },
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }


}
