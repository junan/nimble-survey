import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from '../auth/components/form-login/form-login.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sign_in', component: LoginComponent },
];

@NgModule({
  declarations: [FormLoginComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AuthModule { }
