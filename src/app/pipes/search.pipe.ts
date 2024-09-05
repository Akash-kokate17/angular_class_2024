import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(input: any[], searchVal: string): any {
    console.log(input,searchVal);
    if(!searchVal){
      return input
    }
    return input = input.filter((emp:any)=>JSON.stringify(emp).includes(searchVal))
  }
}
