import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private clickCounter = new BehaviorSubject<number>(0);
  clickCounter$ = this.clickCounter.asObservable();
  

  private counter = 0;

  constructor() { }

  
  increment() {
    this.counter +=1;
    this.clickCounter.next(this.counter);
  }
  
}
