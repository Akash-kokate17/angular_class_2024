import { CommonModule } from '@angular/common';
import { Component, ViewChildren, } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,CategoryItemComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  allCategories = [
    { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery1', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery2', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery3', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery4', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery6', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery7', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Grocery8', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
  ]

  @ViewChildren(CategoryItemComponent) categoryItems:any;

  ngAfterViewInit(){
    console.log(this.categoryItems)
    console.log(this.categoryItems._results[0],'results')
  }
}
