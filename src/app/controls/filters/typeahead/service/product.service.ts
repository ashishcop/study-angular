import { Injectable, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  private customerChange = new Subject<string>();
  customerChange$ = this.customerChange.asObservable();

  products = [
    { id: 'P1', name: 'car', customerId: 'C1' },
    { id: 'P2', name: 'phone', customerId: 'C1' },
    { id: 'P3', name: 'bus', customerId: 'C1' },
    { id: 'P2', name: 'phone', customerId: 'C2' },
    { id: 'P4', name: 'taxi', customerId: 'C2' },
    { id: 'P3', name: 'bus', customerId: 'C2' },
  ];
  constructor() {}

  ngOnInit(): void {}

  update(customerId: string) {
    this.customerChange.next(customerId);
  }

  getProductsOfCustomer(customerId: string) {
    return of(
      this.products.filter((product) => product.customerId === customerId)
    );
  }
}
