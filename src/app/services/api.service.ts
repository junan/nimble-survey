import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';
import {environment} from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers: object = {
        'Content-Type': 'application/json',
    };

    constructor(private http: HttpClient) {
    }

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


    private postRequest(endpoint: string, data: object): Observable<any> {
        return this.http.post<any>(endpoint, data, this.headers).pipe(
            retry(1), catchError(this.handleError)
        );
    }

    // Error handling
    private handleError(error: any): void {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} \n ${error}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
