import { TestBed } from '@angular/core/testing';

import { SignedInAuthGuardService } from './signed-in-guard.service';

describe('SignedInGuardService', () => {
  let service: SignedInAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignedInAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
