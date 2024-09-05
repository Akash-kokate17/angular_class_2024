import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCounter]',
  standalone: true
})
export class CounterDirective {

  numberOfClicks = 0

@HostListener('click',['$event.target'])
onClick(btn:any){
  console.log(`btn ${btn.id} the number of clicks ${this.numberOfClicks++}`)
}
}
