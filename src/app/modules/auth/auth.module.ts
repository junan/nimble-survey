import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../auth/components/form-login/form-login.component';

@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule
  ]
})

export class AuthModule { }
