import { Injectable } from '@angular/core';
import { constants } from '@shared/constants';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  setAccessToken(accessToken: string): void {
    localStorage.setItem(constants.USER_ACCESS_TOKEN_KEY, accessToken);
  }

  isSignedIn(): boolean {
    return Boolean(localStorage.getItem(constants.USER_ACCESS_TOKEN_KEY));
  }
}
