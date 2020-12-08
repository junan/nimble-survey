import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let baseElement: any;

  const SELECTORS = {
    signInPage: '.sign-in-wrapper'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders header', () => {
    expect(baseElement.querySelector(SELECTORS.signInPage)).toBeTruthy();
  });
});
