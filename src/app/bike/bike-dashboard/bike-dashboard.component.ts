import { Component, inject, OnInit } from '@angular/core';
import { MonitorService } from '../../core/monitor.service';
import { Observable, of } from 'rxjs';
import { CoreModule } from '../../core/core.module';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bike-dashboard',
  standalone: true,
  imports: [CoreModule,AsyncPipe],
  templateUrl: './bike-dashboard.component.html',
  styleUrl: './bike-dashboard.component.css',
  providers:[MonitorService]
})
export class BikeDashboardComponent implements OnInit {
  
  bikeClickCount$: Observable<number> = of(0);

  bikeService = inject(MonitorService);

  ngOnInit(): void {
    this.bikeClickCount$ = this.bikeService.clickCounter$;
  }

  submit() {
    this.bikeService.increment();
  }
}
