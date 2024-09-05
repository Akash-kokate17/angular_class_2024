import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(inputStr:string,limit = 20, completeWords = false, ellipsis = '...'): any {
    // console.log('truncate pipe invoked')
   if(completeWords){
   limit = inputStr.substr(0,limit).lastIndexOf(' ')
   console.log(limit,'limit')
   }
   return inputStr.length > limit ? inputStr.substr(0,limit) + ellipsis : inputStr
  }

}
