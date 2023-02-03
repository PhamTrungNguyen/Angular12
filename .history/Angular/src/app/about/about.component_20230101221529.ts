import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public fruit = ['apple', 'orange', 'grape', 'lemon'];
  public fruit2 = [
    { name: 'apple', price: 10, onSale: true },
    { name: 'orange', price: -12, onSale: false },
    { name: 'grape', price: -14, onSale: false },
    { name: 'lemon', price: 15, onSale: true },
  ];
  public cites = [{ city: '' }];
  public ngOnInit(): void {
    console.log('Fruit', this.fruit);
  }
}
