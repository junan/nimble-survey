import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormForgotPasswordComponent } from './form-forgot-password.component';

describe('FormForgotPasswordComponent', () => {
  let component: FormForgotPasswordComponent;
  let fixture: ComponentFixture<FormForgotPasswordComponent>;
  let baseElement: any;

  const SELECTORS = {
    emailField: '.form-forgot-password input[type="email"]',
    submitButton: '.form-forgot-password button[type="submit"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormForgotPasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgotPasswordComponent);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('renders the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders forgot form', () => {
    expect(baseElement.querySelector(SELECTORS.emailField)).toBeTruthy();
    expect(baseElement.querySelector(SELECTORS.submitButton)).toBeTruthy();
  });
});
