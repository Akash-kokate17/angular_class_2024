import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]',
  standalone: true,
})
export class NumberonlyDirective {
  @HostBinding('style.background-color') myBgColor: string = '';

  @HostListener('keyup',['$event.target.value'])
  handleKeyUp(value:string){
    let regExp = new RegExp(/^[0-9]*$/);
    if(!regExp.test(value)){
         this.myBgColor = 'red'
    }else{
      this.myBgColor = 'cyan'
    }
  }
}
