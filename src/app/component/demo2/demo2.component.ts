import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
flag : boolean = false;
cars = ['tata','honda','maruti','hundai','bmw']
}
