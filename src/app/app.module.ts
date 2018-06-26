import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CockpitNotificationModule } from 'cockpitNotification';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CockpitNotificationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
