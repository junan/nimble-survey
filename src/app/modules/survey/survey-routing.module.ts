import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';
import { EnsureAuthenticatedUserGuardService } from '@service/guard/ensure-authenticated-user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoadingSkeletonComponent,
    canActivate: [EnsureAuthenticatedUserGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
