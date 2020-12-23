import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from '@service/session/session.service';
import { EnsureAuthenticatedGuardService } from './ensure-authenticated-user-guard.service';

describe('EnsureAuthenticatedGuardService', () => {
  let guardService: EnsureAuthenticatedGuardService;
  let sessionService: SessionService;

  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    sessionService = TestBed.inject(SessionService);
    guardService = TestBed.inject(EnsureAuthenticatedGuardService);
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
