import { TestBed } from '@angular/core/testing';
import { ForgotPasswordService } from './forgot-password.service';

describe('ForgotPasswordService', () => {
  let service: ForgotPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordService);
  });

  it('creates the ForgotPasswordService', () => {
    expect(service).toBeTruthy();
  });
});
