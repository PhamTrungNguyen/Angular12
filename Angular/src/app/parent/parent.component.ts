import { Component, ViewChild } from '@angular/core';
import { ParentSonComponent } from '../parent-son/parent-son.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public message: string = '';
  @ViewChild('son1') son1: ParentSonComponent | undefined; // Cha gọi function Con
  @ViewChild('son2') son2: ParentSonComponent | undefined;
  public HelloSon(name: string) {
    console.log('Con Gọi Cha');
    this.message = 'Đây là thông báo' + name;
  }
  public CallSon() {
    this.son1?.ParentCallSon('10');
    this.son2?.ParentCallSon('20');
  }
}
