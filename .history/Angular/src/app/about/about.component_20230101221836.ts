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
  public cites = [
    {
      city: 'Da Nang',
      district: [
        'Thành phố Phan Rang - Tháp Chàm',
        'Huyện Bác Ái',
        'Huyện Ninh Hải',
        'Huyện Ninh Phước',
        'Huyện Ninh Sơn',
        'Huyện Thuận Bắc',
        'Huyện Thuận Nam',
      ],
      c44 = [
        'Thành phố Việt Trì',
        'Thị xã Phú Thọ',
        'Huyện Cẩm Khê',
        'Huyện Đoan Hùng',
        'Huyện Hạ Hòa',
        'Huyện Lâm Thao',
        'Huyện Phù Ninh',
        'Huyện Tam Nông',
        'Huyện Tân Sơn',
        'Huyện Thanh Ba',
        'Huyện Thanh Sơn',
        'Huyện Thanh Thủy',
        'Huyện Yên Lập',
      ],
    },
  ];
  public ngOnInit(): void {
    console.log('Fruit', this.fruit);
  }
}
