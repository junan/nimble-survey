import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthHeaderComponent } from './auth-header.component';

describe('AuthHeaderComponent', () => {
  let component: AuthHeaderComponent;
  let fixture: ComponentFixture<AuthHeaderComponent>;
  let baseElement: any;

  const SELECTORS = {
    headerLogo: '.auth-header__logo',
    headerTitle: '.auth-header__subtitle',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHeaderComponent);
    component = fixture.componentInstance;
    component.subTitle = 'Sign in to Nimble';
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders header', () => {
    expect(baseElement.querySelector(SELECTORS.headerLogo).src).toContain(
      'assets/images/logo.svg'
    );
    expect(
      baseElement.querySelector(SELECTORS.headerTitle).textContent
    ).toContain('Sign in to Nimble');
  });
});
