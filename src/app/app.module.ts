import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CockpitNotificationModule, CockpitButtonModule } from 'cockpitNotification';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CockpitNotificationModule, CockpitButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
