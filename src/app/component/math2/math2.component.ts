import { Component, inject,  } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathObj :any;
  constructor(){
    this.mathObj = inject(MathService)
  //  this.mathObj = new MathService(); // not recommended
   console.log('pi value from service',this.mathObj.PI)
  }
  changedPiValue(){
    this.mathObj.PI = 5.141
    console.log('this is new value of pi',this.mathObj.PI)
  }
}
