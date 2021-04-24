import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStandsEventNamesComponent } from './all-stands-event-names.component';

describe('AllStandsEventNamesComponent', () => {
  let component: AllStandsEventNamesComponent;
  let fixture: ComponentFixture<AllStandsEventNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStandsEventNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStandsEventNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
