import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ApiService} from './api.service';
import {environment} from './../../environments/environment';

describe('ApiService', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('can authenticate the sign in successfully', () => {
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

        const params = {
            email: 'someone@example.com',
            password: 'secret',
        };

        service.signIn('api/v1/oauth/token', params).subscribe(data => {
            expect(data).toBe(response);
        });

        const request = httpMock.expectOne(`${environment.apiBaseUrl}/api/v1/oauth/token`);
        expect(request.request.method).toBe('POST');

        request.flush(response);
    });
});
