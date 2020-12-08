import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from '../auth/components/form-sign-in/form-sign-in.component';
import { SignInComponent } from '../auth/pages/sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sign_in', component: SignInComponent },
];

@NgModule({
  declarations: [FormSignInComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AuthModule {}
