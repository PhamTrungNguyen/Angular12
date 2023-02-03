import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public login = '123';
  public name = 'Pham Trung Nguyen';
  public age = 18;
  public fruit = [];
  public resetName(): void {
    this.name = '';
    console.log('resetName');
  }
  constructor(private home: homeService) {}

  public ngOnInit(): void {
    // console.log('Fruit', this.fruit);
  }
}
