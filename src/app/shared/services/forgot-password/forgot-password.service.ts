import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './../base.service';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService extends BaseService {
  forgotPassword(email: string): Observable<any> {
    const endpoint = 'v1/passwords';
    const data = {
      user: {
        email: email,
      },
      client_id: environment.apiClientId,
      client_secret: environment.apiClientSecret,
    };

    return this.postRequest(endpoint, data);
  }
}
