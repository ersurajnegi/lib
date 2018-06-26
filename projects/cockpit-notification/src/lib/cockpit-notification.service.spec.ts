import { TestBed, inject } from '@angular/core/testing';

import { CockpitNotificationService } from './cockpit-notification.service';

describe('CockpitNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CockpitNotificationService]
    });
  });

  it('should be created', inject(
    [CockpitNotificationService],
    (service: CockpitNotificationService) => {
      expect(service).toBeTruthy();
    }
  ));
});
