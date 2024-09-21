import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService implements OnInit {
  customers = [
    { id: 'C1', name: 'Ashish' },
    { id: 'C2', name: 'Alok' },
    { id: 'C3', name: 'amit' },
  ];

  constructor() {}

  ngOnInit(): void {}

  getCustomers() {
    return of(this.customers);
  }
}
