import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 product:any;
 loading:boolean = true;
 constructor(private productServices:ProductService){}

   ngOnInit(){
    this.productServices.fetchAllProducts().subscribe((response)=>{
      this.product = response
      this.loading = false
    })
   }
}
