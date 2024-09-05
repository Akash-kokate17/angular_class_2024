import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {
num:any;
numSquare:any
a:any;
ngOnInit(){
  this.num = signal(0)
  this.numSquare = computed(()=> this.num() * this.num());
}

increment(){
  this.num.update((value: number)=>value + 1)
}
decrement(){
  this.num.update((value: number)=>value - 1)
}
reset(){
 this.num.set(0)
}
}
