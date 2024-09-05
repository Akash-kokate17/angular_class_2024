import { Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
  inputs:['category']
})
export class CategoryItemComponent {
  category:any;
}
