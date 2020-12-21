import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@service/guard/auth-guard.service';

import { SurveyListComponent } from './pages/survey-list/survey-list.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuardService], data: { role: 'signedInUser' }, children: [
      // All paths goes here will need to be passed AuthGuardService authentication to access it
      { path: '', component: SurveyListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SurveyRoutingModule {}
