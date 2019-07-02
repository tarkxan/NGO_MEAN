import { TestBed } from '@angular/core/testing';

import { DonationsListService } from './donations-list.service';

describe('DonationsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationsListService = TestBed.get(DonationsListService);
    expect(service).toBeTruthy();
  });
});
