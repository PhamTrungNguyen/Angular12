import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = 'blue';
  constructor(private el: ElementRef) {}
  public ngOnInit(): void {
    // console.log('HighlightDirective', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
