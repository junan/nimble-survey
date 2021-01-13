import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';

@NgModule({
  declarations: [LoadingSkeletonComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule, SurveyRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SurveyModule {}
