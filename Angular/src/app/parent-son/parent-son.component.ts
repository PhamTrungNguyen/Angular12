import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-son',
  templateUrl: './parent-son.component.html',
  styleUrls: ['./parent-son.component.scss'],
})
export class ParentSonComponent {
  @Input() public name: string = ''; // cha truyền con
  @Output() CallSon: EventEmitter<any> = new EventEmitter(); // Con gọi function Cha
  public CallParent() {
    // console.log('Call Parent');
    this.CallSon.emit(this.name);
  }
  public ParentCallSon(number: string) {
    console.log('ParentCallSon :' + this.name + 'money:' + number);
  }
}
