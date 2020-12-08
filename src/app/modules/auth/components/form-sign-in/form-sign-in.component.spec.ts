import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSignInComponent } from './form-sign-in.component';

describe('FormSignInComponent', () => {
  let component: FormSignInComponent;
  let fixture: ComponentFixture<FormSignInComponent>;
  let baseElement: any;

  const SELECTORS = {
    emailField: '.form-sign-in input[type="email"]',
    passwordField: '.form-sign-in input[type="password"]',
    submitButton: '.form-sign-in button[type="submit"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSignInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSignInComponent);
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
});
