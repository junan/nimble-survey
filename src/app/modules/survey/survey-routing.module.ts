import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnsureAuthenticatedUserGuardService } from '@service/guard/ensure-authenticated-user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [EnsureAuthenticatedUserGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
