import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { FormForgotPasswordComponent } from './components/form-forgot-password/form-forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AlertComponent } from 'app/shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AuthHeaderComponent,
    FormSignInComponent,
    FormForgotPasswordComponent,
    SignInComponent,
    ForgotPasswordComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
