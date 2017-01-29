import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[autoGrow]'
})
export class AutoGrowDirective{

    constructor(private el: ElementRef){

    }

     @HostListener('click') onClick(){
        alert('I am called')
         this.el.nativeElement.style.backgroundColor = 'yellow';
    }

      @HostListener('blur') onBlur(){
       this.el.nativeElement.style.backgroundColor = 'blue';
    }

}