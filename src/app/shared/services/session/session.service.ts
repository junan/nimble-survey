import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  USER_ACCESS_TOKEN_KEY = '_nimble-survey_user_access_token';

  constructor() { }

  setAccessToken(accessToken: string): void {
    localStorage.setItem(this.USER_ACCESS_TOKEN_KEY, accessToken);
  }

  signedIn(): boolean {
    return localStorage.getItem(this.USER_ACCESS_TOKEN_KEY) != null;
  }
}
