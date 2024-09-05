import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true,
  pure:false
})
export class RemainingPipe implements PipeTransform {
  transform(input: any, maxLength = 100) {
    console.log('remaining pipe invoked');
    return maxLength - input.length;
  }
}
