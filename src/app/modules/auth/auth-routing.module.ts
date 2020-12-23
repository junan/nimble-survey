import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnsureUnauthenticatedUserGuardService } from '@service/guard/ensure-unautehnticated-user-guard.service';

import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [EnsureUnauthenticatedUserGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
