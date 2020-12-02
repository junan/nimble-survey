import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../auth/components/form-login/form-login.component';
import { LoginComponent } from '../auth/pages/login/login.component';

@NgModule({
  declarations: [FormLoginComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})

export class AuthModule { }
