import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
        <li>
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/products/0/edit']"
            >Add Product</a
          >
        </li>
      </ul>
    </nav>
    <div class="container"><router-outlet></router-outlet></div>
  `,
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Product Management';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
  }
}
