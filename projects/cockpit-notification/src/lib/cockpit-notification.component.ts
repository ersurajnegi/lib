import { Component, OnInit } from '@angular/core';
import { CockpitNotificationService } from './cockpit-notification.service';

@Component({
  selector: 'ccpt-cockpitNotification',
  templateUrl: './cockpit-notification.component.html',
  styles: []
})
export class CockpitNotificationComponent implements OnInit {
  show: boolean;
  constructor(private _notificationService: CockpitNotificationService) {
    this.show = !this.show;

    this._notificationService.sendNotification$.subscribe(data => {
      this.show = !this.show;
    });
  }

  ngOnInit() {}
}
