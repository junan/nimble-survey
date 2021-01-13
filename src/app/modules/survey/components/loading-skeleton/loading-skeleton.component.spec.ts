import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoadingSkeletonComponent } from './loading-skeleton.component';
import { HttpClientModule } from "@angular/common/http";

describe('LoadingSkeletonComponent', () => {
  let component: LoadingSkeletonComponent;
  let fixture: ComponentFixture<LoadingSkeletonComponent>;
  let baseElement: any;

  const SELECTORS = {
    loadingSkeleton: '.loading-skeleton',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSkeletonComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSkeletonComponent);
    component = fixture.componentInstance;
    baseElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders loading skeleton component', () => {
    expect(baseElement.querySelector(SELECTORS.loadingSkeleton)).toBeTruthy();
  });
});
