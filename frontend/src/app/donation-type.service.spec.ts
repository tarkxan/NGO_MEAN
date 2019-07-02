import { TestBed } from '@angular/core/testing';

import { DonationTypeService } from './donation-type.service';

describe('DonationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationTypeService = TestBed.get(DonationTypeService);
    expect(service).toBeTruthy();
  });
});
