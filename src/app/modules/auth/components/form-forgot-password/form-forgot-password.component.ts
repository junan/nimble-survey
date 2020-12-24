import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
})
export class FormForgotPasswordComponent implements OnInit {
  alertTitle = 'Check your email.';
  alertMessage = 'We’ve email you instructions to reset your password.';
  alertIcon = 'bell';

  constructor() {}

  ngOnInit(): void {}
}
