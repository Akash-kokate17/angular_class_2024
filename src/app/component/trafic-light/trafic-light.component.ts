import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trafic-light.component.html',
  styleUrl: './trafic-light.component.css'
})
export class TraficLightComponent {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'green', duration: 4000 },
      "green": { nextColor: 'yellow', duration: 3000 },
      "yellow": { nextColor: 'red', duration: 1000 }
    };
    this.colorsArr = Object.keys(this.config);
    console.log(this.colorsArr);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
