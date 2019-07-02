import { TestBed } from '@angular/core/testing';

import { ServDonationService } from './serv-donation.service';

describe('ServDonationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServDonationService = TestBed.get(ServDonationService);
    expect(service).toBeTruthy();
  });
});
