import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeMessagesComponent } from './attendee-messages.component';

describe('AttendeeMessagesComponent', () => {
  let component: AttendeeMessagesComponent;
  let fixture: ComponentFixture<AttendeeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
