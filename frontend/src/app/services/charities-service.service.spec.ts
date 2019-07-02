import { TestBed } from '@angular/core/testing';

import { CharitiesServiceService } from './charities-service.service';

describe('CharitiesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharitiesServiceService = TestBed.get(CharitiesServiceService);
    expect(service).toBeTruthy();
  });
});
