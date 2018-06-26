import { NgModule } from '@angular/core';

import { CockpitNotificationComponent } from './cockpit-notification.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CockpitNotificationComponent],
  exports: [CockpitNotificationComponent]
})
export class CockpitNotificationModule {}
