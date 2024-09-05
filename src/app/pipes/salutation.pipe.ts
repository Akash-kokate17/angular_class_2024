import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any {
    let gender = ''
     if(input === 'male'){
      return gender += "Mr"
     }else{
      return gender += "Miss"
     }
  }

}
