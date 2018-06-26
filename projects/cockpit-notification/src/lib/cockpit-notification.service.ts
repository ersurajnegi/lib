import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CockpitNotificationService {
  sendNotification: Subject<any>;
  sendNotification$: Observable<any>;

  constructor() {
    this.sendNotification = new Subject();
    this.sendNotification$ = this.sendNotification.asObservable();
  }

  notify() {
    this.sendNotification.next('test');
  }
}
