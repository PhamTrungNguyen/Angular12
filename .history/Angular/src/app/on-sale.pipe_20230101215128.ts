import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('my pipe', value);
    if (value > 0) {
      return 'Đang hạ giá';
    }
    return null;
  }
}
