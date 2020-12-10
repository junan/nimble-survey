import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './../base.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {
  public signIn(endpoint: string, params: any): Observable<any> {
    const apiUrl = `${environment.apiBaseUrl}/${endpoint}`;
    const data = {
      grant_type: 'password',
      email: params.email,
      password: params.password,
      client_id: environment.apiClientId,
      client_secret: environment.apiClientSecret
    };

    return this.postRequest(apiUrl, data);
  }
}
