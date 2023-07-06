import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMeasureComponent } from './financial-measure.component';

describe('FinancialMeasureComponent', () => {
  let component: FinancialMeasureComponent;
  let fixture: ComponentFixture<FinancialMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialMeasureComponent]
    });
    fixture = TestBed.createComponent(FinancialMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
