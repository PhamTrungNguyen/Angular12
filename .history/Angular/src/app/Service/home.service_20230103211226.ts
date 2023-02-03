import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public counter = 10;
  constructor() {}
  public count(n: number): number {
    return n * n;
  }
}
