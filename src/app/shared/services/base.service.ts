import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Deserializer } from 'ts-jsonapi';
import { environment } from '@environment';

@Injectable()

export abstract class BaseService {
  headers: object = {
    'Content-Type': 'application/json',
  };

  deserializer = new Deserializer({
    keyForAttribute: 'camelCase'
  });

  constructor(private http: HttpClient) {
  }

  postRequest(endpoint: string, data: object): Observable<any> {
    const apiUrl = this.generateApiUrl(endpoint);
    return this.http.post<any>(apiUrl, data, this.headers).pipe(
      retry(1),
      catchError(this.handleError),
      map(response => this.deserialize(response)));
  }

  private generateApiUrl(endpoint: string): string {
    return `${environment.apiBaseUrl}/api/${environment.apiVersion}/${endpoint}`;
  }

  private handleError(error: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} \n ${error}`;
    }
    return throwError(errorMessage);
  }

  private deserialize(data: any): Observable<any> {
    try {
      return this.deserializer.deserialize(data);
    } catch {
      return data;
    }
  }
}
