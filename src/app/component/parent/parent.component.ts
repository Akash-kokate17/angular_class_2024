import { Component, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component, Child2Component,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  a = 10;
flag :boolean = true;
  @ViewChild(Child1Component) child1Obj:any;
parentName:string;
  f1() {
    console.log('this function is coming from parent');
  }

  receivedDataFromChild(dataFromChild: any) {
    this.parentName = dataFromChild;
  };
  
  constructor(){  //dependency injection
    console.log('parent constructor')
    this.parentName = ''
  };

  ngOnInit(){
    console.log('parent ngOnInit')
  };
  
  ngOnChanges(){
    console.log('parent ngOnChanges');
  };
  ngAfterViewInit(){
    console.log(this. child1Obj)
  }
}
