import { TestBed } from '@angular/core/testing';

import { GuardsDataFetchGuard } from './guards-data-fetch.guard';

describe('GuardsDataFetchGuard', () => {
  let guard: GuardsDataFetchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsDataFetchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
