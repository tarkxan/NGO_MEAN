import { TestBed } from '@angular/core/testing';

import { AdminUserManagementService } from './admin-user-management.service';

describe('AdminUserManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminUserManagementService = TestBed.get(AdminUserManagementService);
    expect(service).toBeTruthy();
  });
});
