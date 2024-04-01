import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBackground implements OnInit{

    @Input() backColor: string = '#36454f';
    @Input() textColor: string = 'white';

    constructor(private element: ElementRef,
                private renderer: Renderer2){
    }

    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = 'red';//using nativElement directly accessing DOM which is not recommended
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor);// When using renderer this will not directly accesssing DOM.
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    }
}