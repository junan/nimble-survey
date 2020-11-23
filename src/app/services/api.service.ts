import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiURL: string = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }


    getRates(base: string): Observable<ExchangeRatesResponse> {
        return this.http.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`);
    }
}
