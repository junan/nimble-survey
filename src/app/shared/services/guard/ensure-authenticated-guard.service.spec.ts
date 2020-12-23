import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '@service/session/session.service';
import { EnsureAuthenticatedUserGuardService } from './ensure-authenticated-user-guard.service';

describe('EnsureAuthenticatedUserGuardService', () => {
  let guardService: EnsureAuthenticatedUserGuardService;
  let sessionService: SessionService;

  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    sessionService = TestBed.inject(SessionService);
    guardService = TestBed.inject(EnsureAuthenticatedUserGuardService);
  });

  it('creates guardService', () => {
    expect(guardService).toBeTruthy();
  });

  describe('#canActivate', () => {
    describe('Given the user is signed in', () => {
      it('returns true', () => {
        spyOn(sessionService, 'isSignedIn').and.returnValue(true);

        expect(guardService.canActivate(routeMock, routeStateMock)).toEqual(true);
      });
    });

    describe('Given the user is NOT signed in', () => {
      it('returns false', () => {
        spyOn(sessionService, 'isSignedIn').and.returnValue(false);

        expect(guardService.canActivate(routeMock, routeStateMock)).toEqual(false);
      });
    });
  });
});
