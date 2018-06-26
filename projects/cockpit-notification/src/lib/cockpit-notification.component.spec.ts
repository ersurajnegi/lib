import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitNotificationComponent } from './cockpit-notification.component';

describe('CockpitNotificationComponent', () => {
  let component: CockpitNotificationComponent;
  let fixture: ComponentFixture<CockpitNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
