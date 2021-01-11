import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnsureUnauthenticatedUserGuardService } from '@service/guard/ensure-unautehnticated-user-guard.service';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [EnsureUnauthenticatedUserGuardService]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [EnsureUnauthenticatedUserGuardService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
