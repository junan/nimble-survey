import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignedInAuthGuardService } from '@service/guard/signed-in-auth-guard.service';

import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [SignedInAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
