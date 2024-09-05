import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(input: string, ...args: any[]):any {
    let date:any = new Date().getFullYear();
    let userBirthYear:any = input?.slice(0,4);
    let age = date - userBirthYear;
    return age;
  }

}
