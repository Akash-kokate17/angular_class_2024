import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  template: ` <p>demo1 works!</p> `,
  styles: [`
     p {
    color:red;
    background:pink
    }`],
})

export class Demo1Component {}
