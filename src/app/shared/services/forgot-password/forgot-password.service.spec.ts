import { TestBed } from '@angular/core/testing';
import { ForgotPasswordService } from './forgot-password.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '@environment';

describe('ForgotPasswordService', () => {
  const forgotPasswordApiUrl = `${environment.apiBaseUrl}/api/v1/passwords`;
  let service: ForgotPasswordService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForgotPasswordService],
    });
    service = TestBed.inject(ForgotPasswordService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('returns the success response', () => {
    const response = {
      meta: {
        message: 'We’ve email you instructions to reset your password.',
      },
    };
    const email = 'someone@example.com';

    service.forgotPassword(email).subscribe((data) => {
      expect(data).toEqual(response);
    });

    const request = httpMock.expectOne(forgotPasswordApiUrl);
    expect(request.request.method).toBe('POST');

    request.flush(response);
  });
});
