import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHeaderComponent } from '../auth/components/auth-header/auth-header.component';
import { FormSignInComponent } from '../auth/components/form-sign-in/form-sign-in.component';
import { SignInComponent } from '../auth/pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  declarations: [AuthHeaderComponent, FormSignInComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class AuthModule {}
