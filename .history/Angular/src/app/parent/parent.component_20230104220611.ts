import { ParentSonComponent } from './../../../../.history/Angular/src/app/parent-son/parent-son.component_20230104211356';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public message: string = '';
  @ViewChild('son1') son1;: ParentSonComponent
  public HelloSon(name: string) {
    console.log('Con Gọi Cha');
    this.message = 'Đây là thông báo' + name;
  }
}
