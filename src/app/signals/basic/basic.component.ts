import { NgForOf } from '@angular/common';
import { Component, computed, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Vehicle {
  name: string;
  price: number;
}

export interface BuyVehicle extends Vehicle {
  quantity: number;
  totalCost?: number;
}

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css',
})
export class BasicComponent {
  counter = signal([1, 2, 3, 4, 5, 6, 7]);

  selectedQuantity = -1;

  vehicles = signal<BuyVehicle[]>([]);
  vehichlePrice = 10;
  vehichleName = '';
  quantity = -1;

  totalBill = computed(() =>
    this.vehicles().reduce((sum, vehicle) => {
      return sum + (vehicle.totalCost ?? 0);
    }, 0)
  );

  buyVehicles(vehicle: BuyVehicle) {
    const newVehicle = [...this.vehicles()].concat({
      ...vehicle,
      totalCost: vehicle.price * vehicle.quantity,
    });
    this.vehicles.set(newVehicle);
  }

  onSelectionChange(quantity: number) {
    if (this.selectedQuantity !== -1) {
      this.quantity = 0;
    } else {
      this.quantity = quantity;
    }
  }
}
