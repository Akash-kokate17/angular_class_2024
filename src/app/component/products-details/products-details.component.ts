import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  product: any;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.product = data.product;
    });
  }
}
