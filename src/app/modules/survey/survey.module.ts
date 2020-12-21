import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';

import { SurveyListComponent } from '../survey/pages/survey-list/survey-list.component';

@NgModule({
  declarations: [SurveyListComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SurveyModule {}
