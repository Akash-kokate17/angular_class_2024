import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackButton]',
  standalone: true
})
export class BackButtonDirective {

  constructor(private location:Location) { }
 
  @HostListener('click')
  clickHandler(){
     this.location.back()
  }
}
