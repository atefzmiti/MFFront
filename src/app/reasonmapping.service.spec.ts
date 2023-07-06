import { TestBed } from '@angular/core/testing';

import { ReasonmappingService } from './reasonmapping.service';

describe('ReasonmappingService', () => {
  let service: ReasonmappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReasonmappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
