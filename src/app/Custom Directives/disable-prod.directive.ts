import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProd]'
})
export class DisableProdDirective {

  constructor(private element: ElementRef,
              private rederer: Renderer2) { }

  @Input() set disableProd(disable: Boolean){
    if(disable){
      this.rederer.addClass(this.element.nativeElement, 'disableCard');
    }
  }

}
