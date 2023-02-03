import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-son',
  templateUrl: './parent-son.component.html',
  styleUrls: ['./parent-son.component.scss'],
})
export class ParentSonComponent {
  @Input() public name: string = '';
  @Output() HelloSon;
  public CallParent() {
    console.log('Call Parent');
  }
}
