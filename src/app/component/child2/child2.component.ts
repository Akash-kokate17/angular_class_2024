import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['a','child1'],
  outputs:['nameEvent']
})
export class Child2Component {
  a: any;
  child1:any;

  nameEvent = new EventEmitter();

  name:string = 'sachin tendulkar';

  sendDataToParent(){
  this.nameEvent.emit(this.name);
  }

  ngOnInit(){
    console.log('this is ngOnInit of child2')
  };
  ngOnDestroy(){
    console.log('child 2 is about to be destroy')
  }
}
