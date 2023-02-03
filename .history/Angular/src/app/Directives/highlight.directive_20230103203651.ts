import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    console.log('HighlightDirective');
  }
  public ngOnInit(): void {
    // console.log('Fruit', this.fruit);
  }
}
