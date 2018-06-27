import { Component, AfterViewInit } from '@angular/core';
import { CockpitNotificationService } from 'cockpitNotification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(private test: CockpitNotificationService) {}

  ngAfterViewInit() {
    // initializing the functio
    /* see typing definiton for more APIs. */
  }

  testClick() {
    this.test.notify();
  }
}
