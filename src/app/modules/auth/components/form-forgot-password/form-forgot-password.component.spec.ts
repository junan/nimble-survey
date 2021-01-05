import { ComponentFixture, TestBed } from '@angular/core/testing';
import { throwError, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { FormForgotPasswordComponent } from './form-forgot-password.component';
import { ForgotPasswordService } from '@service/forgot-password/forgot-password.service';

describe('FormForgotPasswordComponent', () => {
  let component: FormForgotPasswordComponent;
  let fixture: ComponentFixture<FormForgotPasswordComponent>;
  let baseElement: any;
  let forgotPasswordService: any;

  const SELECTORS = {
    emailField: '.form-forgot-password input[type="email"]',
    submitButton: '.form-forgot-password button[type="submit"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormForgotPasswordComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgotPasswordComponent);
    forgotPasswordService = TestBed.inject(ForgotPasswordService);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('renders the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders forgot password form', () => {
    expect(baseElement.querySelector(SELECTORS.emailField)).toBeTruthy();
    expect(baseElement.querySelector(SELECTORS.submitButton)).toBeTruthy();
  });

  describe('#onSubmit', () => {
    describe('Given valid oauth credentials', () => {
      it('sets success message to alertMessage variable', () => {
        const data = { email: 'john@example.com' };
        const expectedAlertMessage = 'We’ve email you instructions to reset your password.';
        const response = {
          meta: {
            message: expectedAlertMessage,
          },
        };
        spyOn(forgotPasswordService, 'forgotPassword').and.returnValue(
          of([response])
        );

        component.onSubmit(data);
        expect(component.alertMessage).toBe(expectedAlertMessage);
      });
    });

    describe('Given invalid oauth credentials', () => {
      it('sets error message to alertMessage variable', () => {
        const data = { email: 'john@example.com' };
        const expectedAlertMessage = 'Something went wrong. Please try again!';
        spyOn(forgotPasswordService, 'forgotPassword').and.returnValue(
          throwError(expectedAlertMessage)
        );
        component.onSubmit(data);
        expect(component.alertMessage).toBe(expectedAlertMessage);
      });
    });
  });
});
