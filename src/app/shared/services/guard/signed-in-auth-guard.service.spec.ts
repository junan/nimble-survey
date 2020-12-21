import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignedInAuthGuardService } from './signed-in-auth-guard.service';

describe('SignedInuthGuardService', () => {
  let service: SignedInAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(SignedInAuthGuardService);
  });

  it('creates the component', () => {
    expect(service).toBeTruthy();
  });
});
