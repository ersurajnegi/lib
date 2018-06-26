import { Component, AfterViewInit } from '@angular/core';
import { CockpitNotificationService } from 'cockpitNotification';
import * as SvgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(private test: CockpitNotificationService) {}

  ngAfterViewInit() {
    // initializing the function
    let svgPanZoom: SvgPanZoom.Instance = SvgPanZoom('#wolrd-map-svg');
    /* see typing definiton for more APIs. */
  }

  testClick() {
    this.test.notify();
  }
}
