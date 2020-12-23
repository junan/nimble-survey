import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '@service/session/session.service';
import { SignedInAuthGuardService } from './signed-in-auth-guard.service';

describe('SignedInAuthGuardService', () => {
  let guardService: SignedInAuthGuardService;
  let sessionService: SessionService;

  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/auth/sign-in'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guardService = TestBed.inject(SignedInAuthGuardService);
    sessionService = TestBed.inject(SessionService);
  });

  it('creates SignedInAuthGuardService', () => {
    expect(guardService).toBeTruthy();
  });

  describe('#canActivate', () => {
    describe('Given the user is signed in', () => {
      it('returns false', () => {
        spyOn(sessionService, 'isSignedIn').and.returnValue(true);

        expect(guardService.canActivate(routeMock, routeStateMock)).toEqual(false);
      });
    });

    describe('Given the user is NOT signed in', () => {
      it('returns true', () => {
        spyOn(sessionService, 'isSignedIn').and.returnValue(false);

        expect(guardService.canActivate(routeMock, routeStateMock)).toEqual(true);
      });
    });
  });
});
