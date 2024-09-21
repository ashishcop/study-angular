import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BikeDashboardComponent } from './bike/bike-dashboard/bike-dashboard.component';
import { CarDashboardComponent } from './car/car-dashboard/car-dashboard.component';
import { TypeaheadComponent } from './controls/filters/typeahead/typeahead.component';
import { NgForOf } from '@angular/common';
import { BasicComponent } from './signals/basic/basic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BikeDashboardComponent,
    CarDashboardComponent,
    TypeaheadComponent,
    BasicComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'study-angular';
}
