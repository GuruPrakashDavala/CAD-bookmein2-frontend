import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTimeComponent } from './bar-chart-time.component';

describe('BarChartTimeComponent', () => {
  let component: BarChartTimeComponent;
  let fixture: ComponentFixture<BarChartTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
