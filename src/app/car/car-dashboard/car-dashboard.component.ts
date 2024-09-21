import { Component, inject, OnInit } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { Observable, of } from 'rxjs';
import { MonitorService } from '../../core/monitor.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-car-dashboard',
  standalone: true,
  imports: [CoreModule,AsyncPipe],
  templateUrl: './car-dashboard.component.html',
  styleUrl: './car-dashboard.component.css',
  providers:[MonitorService]
})
export class CarDashboardComponent implements OnInit{
  carClickCount$: Observable<number> = of(0);

  carService = inject(MonitorService);

  ngOnInit(): void {
    this.carClickCount$ = this.carService.clickCounter$;
  }

  submit() {
    this.carService.increment();
  }
}
