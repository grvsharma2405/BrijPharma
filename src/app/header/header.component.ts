import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class = "navbar">
    <!-- logo -->
    <a class = "navbar-brand" href = "#">
        <img width = 240px height = 50px src = "assets/img/bp-logo3.jpg">
    </a>
    <div class = "navbar-menu">
      <div class = "navbar-start">
        <a class = "navbar-item" routerLink = "/">Home</a>
        <a class = "navbar-item">Sales</a>
        <a class = "navbar-item">Purchase</a>
        <a class = "navbar-item">Report</a>
      </div>

      <div class = "navbar-end">
        <a class = "navbar-item" routerLink = "/contact">Contact Us</a>
      </div>
    </div>
    
  </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
