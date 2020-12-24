import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { throwError, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FormSignInComponent } from './form-sign-in.component';
import { AuthenticationService } from '@service/authentication/authentication.service';

describe('FormSignInComponent', () => {
  let component: FormSignInComponent;
  let fixture: ComponentFixture<FormSignInComponent>;
  let baseElement: any;
  let authenticationService: any;
  let router: any;

  const SELECTORS = {
    emailField: '.form-sign-in input[type="email"]',
    passwordField: '.form-sign-in input[type="password"]',
    submitButton: '.form-sign-in button[type="submit"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSignInComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSignInComponent);
    authenticationService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders login form', () => {
    expect(baseElement.querySelector(SELECTORS.emailField)).toBeTruthy();
    expect(baseElement.querySelector(SELECTORS.passwordField)).toBeTruthy();
    expect(baseElement.querySelector(SELECTORS.submitButton)).toBeTruthy();
  });

  describe('#onSubmit', () => {
    describe('Given valid credentials', () => {
      it('navigates to the root path', () => {
        const data = { email: 'john@example.com', password: 'secret' };
        const response = {
          id: 1,
          accessToken: 'access_token',
          tokenType: 'Bearer',
          expiresIn: 7200,
          refreshToken: 'refresh_token',
          createdAt: 1606198702,
        };

        spyOn(authenticationService, 'signIn').and.returnValue(of([response]));
        spyOn(router, 'navigate').and.stub();

        component.onSubmit(data);
        expect(router.navigate).toHaveBeenCalledWith(['/']);
      });
    });

    describe('Given invalid credentials', () => {
      it('sets error message to alertMessage variable', () => {
        const data = { email: 'john@example.com', password: 'invalid-pass' };
        const expectedAlertMessage =
          'Email or Password is invalid. Please try again.';
        spyOn(authenticationService, 'signIn').and.returnValue(
          throwError(expectedAlertMessage)
        );

        component.onSubmit(data);
        expect(component.alertMessage).toBe(expectedAlertMessage);
      });
    });
  });
});
