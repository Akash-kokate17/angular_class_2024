import { Block } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindingassignment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databindingassignment.component.html',
  styleUrl: './databindingassignment.component.css',
  // encapsulation:ViewEncapsulation.None
})
export class DatabindingassignmentComponent {
  isParagraph = false;

  count = 100;
  text = '';

  number1 = 0;
  number2 = 0;

  counter = 0;

  dayNightMode = true;

  togglePara() {
    this.isParagraph = !this.isParagraph;
  }

  toggleDayNightMode() {
    this.dayNightMode = !this.dayNightMode;
    document.body.style.background = !this.dayNightMode ? 'black' : 'white';
    document.body.style.color = !this.dayNightMode ? 'white' : 'black';
  }

  show = false;
  togglePass() {
    this.show = !this.show;
  }

  onChangeHandler(evt: any) {
    console.log(typeof evt, 'event');
    if (evt.length <= 100) {
      this.count = 100 - evt.length;
      this.text = evt;
      console.log('length', evt.length);
    } else {
      alert('you over the text limit');
      this.text = evt.slice(0, 100);
      this.count = 0;
    }
  }

  increment() {
    this.counter = this.counter + 1;
  }
  decrement() {
    this.counter = this.counter - 1;
  }
  reset() {
    this.counter = this.counter = 0;
  }

  add(num1: String, num2: String) {
    console.log(+num1 + +num2);
  }
}
