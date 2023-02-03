import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public fruit = ['apple', 'orange', 'grape', 'lemon'];
  public fruit2 = [
    { name: 'apple', price: 10 },
    { name: 'orange', price: 12 },
    { name: 'grape', price: 14 },
    { name: 'lemon', price: 15 },
  ];

  public ngOnInit(): void {
    console.log('Fruit', this.fruit);
  }
}
