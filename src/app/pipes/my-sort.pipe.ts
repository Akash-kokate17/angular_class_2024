import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  standalone: true,
  pure:false,
})
export class MySortPipe implements PipeTransform {
  transform(arr: any[], ...args: unknown[]): any {
    console.log('mySort invoked')
    return arr = arr.sort((a: any, b: any) => a - b);
  }
}
