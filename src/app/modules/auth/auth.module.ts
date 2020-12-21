import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthHeaderComponent } from '../auth/components/auth-header/auth-header.component';
import { FormSignInComponent } from '../auth/components/form-sign-in/form-sign-in.component';
import { SignInComponent } from '../auth/pages/sign-in/sign-in.component';
import { AlertComponent } from 'app/shared/components/alert/alert.component';

@NgModule({
  declarations: [AuthHeaderComponent, FormSignInComponent, SignInComponent, AlertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AuthModule {}
