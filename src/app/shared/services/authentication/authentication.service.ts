import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './../base.service';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {
  signIn(params: any): Observable<any> {
    const endpoint = `${environment.signInApiVersion}/oauth/token`;
    const data = {
      grant_type: 'password',
      email: params.email,
      password: params.password,
      client_id: environment.apiClientId,
      client_secret: environment.apiClientSecret
    };

    return this.postRequest(endpoint, data);
  }
}
