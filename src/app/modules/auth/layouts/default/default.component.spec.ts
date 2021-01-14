import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DefaultComponent } from './default.component';
import { AuthHeaderComponent } from '@component/auth/components/auth-header/auth-header.component';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;
  let baseElement: any;

  const SELECTORS = {
    headerTitle: '.auth-header__title',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultComponent, AuthHeaderComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    component.headerTitle = 'Sign in to Nimble';
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders header title', () => {
    expect(
      baseElement.querySelector(SELECTORS.headerTitle).textContent
    ).toContain('Sign in to Nimble');
  });
});
