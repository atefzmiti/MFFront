import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancialMeasureComponent } from './create-financial-measure.component';

describe('CreateFinancialMeasureComponent', () => {
  let component: CreateFinancialMeasureComponent;
  let fixture: ComponentFixture<CreateFinancialMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFinancialMeasureComponent]
    });
    fixture = TestBed.createComponent(CreateFinancialMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
