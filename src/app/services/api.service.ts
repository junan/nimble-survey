import {Injectable} from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';
import {environment} from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers: object = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    constructor(private http: HttpClient) {
    }

    public signIn(endpoint: string, option: object): Observable<any> {
        const apiUrl = `${environment.apiBaseUrl}/api/v1/oauth/token`;
        const data = {
            grant_type: 'password',
            email: 'junan.cs@gmail.com',
            password: '12345678',
            client_id: environment.apiClientId,
            client_secret: environment.apiClientSecret
        };

        return this.postRequest(apiUrl, data);
    }


    private postRequest(endpoint: string, data: object): Observable<any> {
        return this.http.post<any>(endpoint, JSON.stringify(data), this.headers).pipe(
            retry(1), catchError(this.handleError)
        );
    }

    // Error handling
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
