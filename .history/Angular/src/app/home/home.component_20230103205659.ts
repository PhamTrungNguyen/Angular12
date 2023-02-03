import { Component } from '@angular/core';
import { HomeService } from '../Service/home.service';

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
  public counter = 0;
  public resetName(): void {
    this.name = '';
    console.log('resetName');
  }
  constructor(private home: HomeService) {}

  public ngOnInit(): void {
    // console.log('Fruit', this.fruit);
    this.counter = this.home.count(2);
  }
}
