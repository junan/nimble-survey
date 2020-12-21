import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Deserializer } from 'ts-jsonapi';
import { environment } from '@environment';
import { constants } from '@constants';

@Injectable()

export abstract class BaseService {
  readonly headers: object = {
    'Content-Type': 'application/json',
  };

  deserializer = new Deserializer({
    keyForAttribute: 'camelCase'
  });

  constructor(private http: HttpClient){
  }

  postRequest(endpoint: string, data: object): Observable<any>{
    const apiUrl = this._generateApiUrl(endpoint);
    return this.http.post<any>(apiUrl, data, this.headers).pipe(
      retry(1),
      catchError(this._handleError),
      map(response => this._deserialize(response)));
  }

  private _generateApiUrl(endpoint: string): string{
    return `${environment.apiBaseUrl}/api/${environment.apiVersion}/${endpoint}`;
  }

  private _handleError(error: any): Observable<any>{
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      // TODO: need to refactor after fixing https://github.com/nimblehq/nimble-survey-web/issues/49
      if (error.status === 400) {
        errorMessage = constants.INVALID_CREDENTIAL_ERROR_MESSAGE;
      } else {
        errorMessage = constants.DEFAULT_ERROR_MESSAGE;
      }
    }
    return throwError(errorMessage);
  }

  private _deserialize(data: any): Observable<any>{
    try {
      return this.deserializer.deserialize(data);
    } catch {
      return data;
    }
  }
}
