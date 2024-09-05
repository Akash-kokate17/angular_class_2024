import { Component } from '@angular/core';
import { LargeComponentComponent } from '../../componet/large-component/large-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LargeComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
