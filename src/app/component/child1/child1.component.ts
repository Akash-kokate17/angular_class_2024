import { Component, SimpleChange, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a', 'childf1'],
})
export class Child1Component {
  a: any;
  childf1: any;
  b: number = 100;

  @ViewChild('myInputBox') inputBox:any;
  @ViewChildren("myInputBox") inputBoxes:any;

  f2() {
    console.log('this is f2 from child1');
  }

  constructor() {
    console.log('child constructor');
    console.log(document.getElementById("myBox1"))
  }
  ngOnChanges(myChanges: SimpleChange) {
    console.log('child onOnChanges');
    console.log(myChanges);
  };
  ngOnInit() {
    console.log('child ngOnInit');
  };
  ngDoCheck(){
   console.log("this is child1 ngDoCheck")
  };
  ngAfterContentInit(){
  console.log('this is child1 ngAfterContentInit')
  };
  ngAfterContentChecked(){
    console.log('this is child1 ngAfterContentChecked')
  };
  ngAfterViewInit(){
    console.log('this is child1 ngAfterViewInit')
    console.log(document.getElementById("myBox1"))
    console.log(this.inputBox,'viewChildren');
    this.inputBox.nativeElement.focus();
   console.log(this.inputBoxes)  
   this.inputBoxes._results.forEach((inputBox:any)=>{
     inputBox.nativeElement.style.backgroundColor = 'red'
   })
  };
  ngAfterViewChecked(){
  console.log('this is child1 ngAfterViewChecked')
  }
}
