import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,FormsModule,RemainingPipe,OrdinalPipe,AgePipe,
    SalutationPipe,SearchPipe,TruncatePipe,MySortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
name : string = 'sachin tenDUlkar';
sal = 5000;
today = new Date();
user = {name:'akash',age:21,add:'pune'};
arr = [1,2,3,4,5,6,7];
msg = 'hello';
msg2 = 'hi i am akash';
num = 0;
inputVal:any ;
yourAge :any;
searchVal:any;
longStr:string = 'Hello Everyone Good Morning This Is Pipe Demo'
arr1= [10,70,80,40,90,60];
employees = [
  {name:'sanjya',sal:9000,gender:'male'},
  {name:'akash',sal:4000,gender:'male'},
  {name:'sita',sal:7000,gender:'female'},
  {name:'gita',sal:8000,gender:'female'},
  {name:'ramesh',sal:2000,gender:'male'}
]
}
