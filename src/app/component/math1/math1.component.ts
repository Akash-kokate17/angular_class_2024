import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(public mathService: MathService){

  }
  ngOnInit(){
    let addResult = this.mathService.add(10,20)
    let mulResult = this.mathService.mul(10,20)
    console.log(addResult,mulResult)
    console.log(`this is PI value ${this.mathService.PI}`)
  }
}
