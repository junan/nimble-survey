import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let baseElement: any;

  const SELECTORS = {
    headerLogo: '.auth-header__logo',
    headerTitle: '.auth-header__subtitle'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders header', () => {
    expect(baseElement.querySelector(SELECTORS.headerLogo).src).toContain('assets/images/logo.svg');
    expect(baseElement.querySelector(SELECTORS.headerTitle).textContent).toContain('Sign in to Nimble');
  });
});
