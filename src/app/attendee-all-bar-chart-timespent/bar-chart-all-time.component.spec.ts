import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartAllTimeComponent } from './bar-chart-all-time.component';

describe('BarChartAllTimeComponent', () => {
  let component: BarChartAllTimeComponent;
  let fixture: ComponentFixture<BarChartAllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartAllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartAllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
