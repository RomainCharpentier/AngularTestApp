import {Directive, Renderer2, ElementRef, HostListener, Input} from '@angular/core'; 

@Directive({
   selector: '[appHighlight]'
})
export class HighlightDirective {

    /**
     * si le nom de l'input = le nom du selector, 
     * alors on peut faire "[appHighlight] = value" dans le template
     */
    @Input('highlightColor') highlightColor: string;
    @Input('highlightBold') isBold = false;

    private defaultColor = 'black';

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.defaultColor = this.el.nativeElement.style.backgroundColor;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
        if (this.isBold) {
            this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
        if (this.isBold) {
            this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
        }
    }
}
