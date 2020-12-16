import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './../authentication/authentication.service';
import { environment } from '@environment';

describe('ApiService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Given the credential is valid', () => {
    it('authenticates the sign in successfully', () => {
      const response = {
        data: {
          id: 1,
          type: 'token',
          attributes: {
            access_token: 'access_token',
            token_type: 'Bearer',
            expires_in: 7200,
            refresh_token: 'refresh_token',
            created_at: 1606198702
          }
        }
      };

      const deserializedResponse = {
        id: 1,
        accessToken: 'access_token',
        tokenType: 'Bearer',
        expiresIn: 7200,
        refreshToken: 'refresh_token',
        createdAt: 1606198702
      };

      const params = {
        email: 'someone@example.com',
        password: 'secret',
      };

      service.signIn('api/v1/oauth/token', params).subscribe(data => {
        expect(data).toEqual(deserializedResponse);
      });

      const request = httpMock.expectOne(`${environment.apiBaseUrl}/api/v1/oauth/token`);
      expect(request.request.method).toBe('POST');

      request.flush(response);
    });
  });

  describe('Given the credential is invalid', () => {
    it('Does NOT authenticate the sign in successfully', () => {
      const response = {
        errors: [
          {
            source: 'Doorkeeper::OAuth::Error',
            detail: 'The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.',
            code: 'invalid_grant'
          }
        ]
      };

      const params = {
        email: 'someone@example.com',
        password: 'invalid_secret',
      };

      service.signIn('api/v1/oauth/token', params).subscribe(data => {
        expect(data).toBe(response);
      });

      const request = httpMock.expectOne(`${environment.apiBaseUrl}/api/v1/oauth/token`);
      expect(request.request.method).toBe('POST');

      request.flush(response);
    });
  });
});
