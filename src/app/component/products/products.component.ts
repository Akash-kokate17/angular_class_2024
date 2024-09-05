import { Component } from '@angular/core';
import * as data from './products.json'
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
myProducts = (data as any).default;
p:any;
storeProducts:any[] = this.myProducts
searchVal:string = '';

findProduct(evt:any){
  if(this.searchVal !== ''){
    this.myProducts = this.storeProducts.filter((prod)=>prod.category.toLowerCase().includes(evt.toLowerCase()))
  }else{
 this.myProducts = this.storeProducts
  }
}

sortAsc(){
new Snackbar('Hello world! 👋',{
  position:'top-center'
});
return  this.myProducts = this.myProducts.sort((prod1:any,prod2:any)=>prod1.price-prod2.price)
};

sortDesc(){
  
  this.myProducts = this.myProducts.sort((prod1:any,prod2:any)=>prod2.price - prod1.price);
  return this.myProducts
}
}
