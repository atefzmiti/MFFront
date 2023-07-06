import { TestBed } from '@angular/core/testing';

import { HistoAppliedDiscountService } from './histo-applied-discount.service';

describe('HistoAppliedDiscountService', () => {
  let service: HistoAppliedDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoAppliedDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
