import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({ selector: '[ColorOnHover]' })

export class ColorOnHoverDirective {
    constructor(private elRef:ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseover') onMouseOver(){
         this.renderer.addClass(this.elRef.nativeElement,'highlight');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.renderer.removeClass(this.elRef.nativeElement,'highlight');
    }

    @HostListener('click') click(eventData: Event) {
        console.log("clicked");
   }
}