import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAttendeesCountComponent } from './event-attendees-count.component';

describe('EventAttendeesCountComponent', () => {
  let component: EventAttendeesCountComponent;
  let fixture: ComponentFixture<EventAttendeesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAttendeesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAttendeesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
