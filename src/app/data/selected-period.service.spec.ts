import { TestBed } from '@angular/core/testing';

import { SelectedPeriodService } from './selected-period.service';

describe('SelectedPeriodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedPeriodService = TestBed.get(SelectedPeriodService);
    expect(service).toBeTruthy();
  });
});
