import { Injectable, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CenterService implements OnInit {
  private productChange = new Subject<string>();
  productChange$ = this.productChange.asObservable();

  centers = [
    { id: 'C1', name: 'Lucknow center', productId: 'P1' },
    { id: 'C2', name: 'Lucknow center', productId: 'P2' },
    { id: 'C3', name: 'Lucknow center', productId: 'P3' },
    { id: 'C4', name: 'Lucknow center', productId: 'P4' },
    { id: 'C2', name: 'Punjab center', productId: 'P1' },
    { id: 'C3', name: 'Chandigarh center', productId: 'P4' },
    { id: 'C4', name: 'Gurgaon center', productId: 'P2' },
    { id: 'C4', name: 'Gurgaon center', productId: 'P3' },
    { id: 'C4', name: 'Gurgaon center', productId: 'P1' },
  ];

  constructor() {}

  ngOnInit(): void {}

  update(productId: string) {
    this.productChange.next(productId);
  }

  getCenterOfProduct(productId: string) {
    return of(this.centers.filter((center) => center.productId === productId));
  }
}
