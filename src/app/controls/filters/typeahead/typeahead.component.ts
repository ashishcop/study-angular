import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { CustomerService } from './service/customer.service';
import { CenterService } from './service/center.service';
import {
  debounce,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { AsyncPipe, CommonModule, NgFor, NgForOf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  standalone: true,
  imports: [AsyncPipe, NgForOf, FormsModule],
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.css',
})
export class TypeaheadComponent implements OnInit {
  customerService = inject(CustomerService);
  productService = inject(ProductService);
  centerService = inject(CenterService);

  customer$: Observable<any> = of([]);
  product$: Observable<any> = of([]);
  center$: Observable<any> = of([]);

  customer = '';
  product = '';
  center = '';

  ngOnInit(): void {
    this.customer$ = this.customerService.getCustomers();
    this.product$ = this.productService.customerChange$.pipe(
      switchMap((customerId) => {
        if (customerId) {
          return this.productService.getProductsOfCustomer(customerId);
        } else {
          return of([]);
        }
      })
    );
    this.center$ = this.centerService.productChange$.pipe(
      switchMap((productId) => {
        if (productId) {
          return this.centerService.getCenterOfProduct(productId);
        } else {
          return of([]);
        }
      })
    );
  }

  onCustomerSelect(event: Event, customer: { id: string; name: string }) {
    if (customer) {
      this.customer = customer.name;
      this.productService.update(customer.id);
    }
  }

  onProductSelect(event: Event, product: { id: string; name: string }) {
    if (product) {
      this.product = product.name;
      this.centerService.update(product.id);
    }
  }

  onCenterSelect(event: Event, center: { id: string; name: string }) {
    if (center) {
      this.center = center.name;
    }
  }

  resetCustomer(value: Event) {
    if (!value) {
      this.productService.update('');
      this.centerService.update('');
      this.product = '';
      this.center = '';
    }
  }
  resetProduct(value: Event) {
    if (!value) {
      this.centerService.update('');
      this.center = '';
    }
  }
  resetCenter(event: Event) {
    this.centerService.update('');
  }
}
