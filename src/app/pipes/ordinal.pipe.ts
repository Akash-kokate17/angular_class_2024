import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(input: any, ...args: any[]):any {
    let msg2 = 'plz enter num'
   if(!input){
    return msg2;
   };
   let lastDigit = input % 10
   switch(lastDigit){
    case 1 :return `${input}St`
    break;
    case 2 :return `${input}Nd`
    break;
    case 3 : return `${input}Rd`
    break;
    default:return `${input}Th`
   }
  }

}
