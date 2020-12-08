import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormSignInComponent } from '../auth/components/form-sign-in/form-sign-in.component';
import { HeaderComponent } from '../auth/components/header/header.component';
import { SignInComponent } from '../auth/pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign_in', component: SignInComponent },
];

@NgModule({
  declarations: [HeaderComponent, FormSignInComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AuthModule {}
