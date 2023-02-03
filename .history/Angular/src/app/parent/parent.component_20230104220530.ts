import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public message: string = '';
  @ViewChil('')
  public HelloSon(name: string) {
    console.log('Con Gọi Cha');
    this.message = 'Đây là thông báo' + name;
  }
}
