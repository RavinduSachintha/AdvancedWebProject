import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  navigate() {
    alert('fdf');
    this.router.navigate(['/pages']);
  }

  ngOnInit() {}
}
