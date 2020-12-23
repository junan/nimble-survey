import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from '@service/session/session.service';

@Injectable({
  providedIn: 'root'
})

export class EnsureAuthenticatedUserGuardService implements CanActivate {
  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this._sessionService.isSignedIn()) {
      return true;
    } else {
      this._router.navigate(['/auth/sign-in']);
      return false;
    }
  }
}
