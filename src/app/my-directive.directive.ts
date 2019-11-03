import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.style.background = 'pink';
      elementRef.nativeElement.style.color= 'white';
      elementRef.nativeElement.style.padding = '60px';
      elementRef.nativeElement.style.marginTop = '60px';
   }

   @HostBinding('style.background') background: string;

   @HostListener('mouseenter')
   mouseEnter(){
     this.background = "skyblue";
    //  console.log('');
    // this.elementRef.nativeElement.style.background = 'red';
    // this.elementRef.nativeElement.style.color = 'white';
    // this.elementRef.nativeElement.style.fontSize = '40px';
   }

   @HostListener('mouseleave')
   mouseLeave(){
     this.background = "purple";
    //  console.log('');
    // this.elementRef.nativeElement.style.background = 'green';
    // this.elementRef.nativeElement.style.color = 'red';
    // this.elementRef.nativeElement.style.fontSize = '20px';
   }
}
