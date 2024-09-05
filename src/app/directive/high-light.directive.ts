import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class HighLightDirective {

  constructor(private ele:ElementRef) { 
    console.log(ele)
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.highLight('yellow','red')
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.highLight('','')
  }

  highLight(bgColor:string,color:string){
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }
}
