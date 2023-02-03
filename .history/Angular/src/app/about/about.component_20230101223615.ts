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
  public cities = [
    {
      city: 'Chọn thành phố',
      district: [],
    },
    {
      city: 'Đà Nẵng',
      district: [
        'Quận Cẩm Lệ',
        'Quận Hải Châu',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Quận Thanh Khê',
        'Huyện Hòa Vang',
        'Huyện Hoàng Sa',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
  ];
  public data: string[] = [];
  public ngOnInit(): void {
    console.log('cites', this.cities);
    // console.log('Fruit', this.fruit);
  }
  public changeCity(e: any): void {
    console.log(e.target.value);
    const city = e.target.value;
    const search = this.cities.filter((item) => item.city === city);
    console.log(
      '🚀 ~ file: about.component.ts:58 ~ AboutComponent ~ changeCity ~ search',
      search
    );
  }
}
