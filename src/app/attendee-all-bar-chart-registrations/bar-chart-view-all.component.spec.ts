import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartViewAllComponent } from './bar-chart-view-all.component';

describe('BarChartViewAllComponent', () => {
  let component: BarChartViewAllComponent;
  let fixture: ComponentFixture<BarChartViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
