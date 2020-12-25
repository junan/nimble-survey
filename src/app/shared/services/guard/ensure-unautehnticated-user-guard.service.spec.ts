import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '@service/session/session.service';
import { EnsureUnauthenticatedUserGuardService } from './ensure-unautehnticated-user-guard.service';

describe('EnsureUnauthenticatedUserGuardService', () => {
  let guardService: EnsureUnauthenticatedUserGuardService;
  let sessionService: SessionService;

  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/auth/sign-in'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guardService = TestBed.inject(EnsureUnauthenticatedUserGuardService);
    sessionService = TestBed.inject(SessionService);
  });

  it('creates EnsureUnauthenticatedUserGuardService', () => {
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
