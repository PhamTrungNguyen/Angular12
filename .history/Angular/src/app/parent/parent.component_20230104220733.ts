import { Component, ViewChild } from '@angular/core';
import ParentSonComponent from './par';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public message: string = '';
  @ViewChild('son1') son1: ParentSonComponent | undefined;
  public HelloSon(name: string) {
    console.log('Con Gọi Cha');
    this.message = 'Đây là thông báo' + name;
  }
}
