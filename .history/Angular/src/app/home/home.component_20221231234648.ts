import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public name = 'Pham Trung Nguyen';
  public Number age = 18;
  public fruit = [];
  public resetName(): void {
    this.name = '';
    console.log('resetName');
  }
  public ngOnInit(): void {
    console.log('Fruit', this.fruit);
  }
}
