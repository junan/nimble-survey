import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
})
export class FormForgotPasswordComponent implements OnInit {
  errorMessage = 'We’ve email you instructions to reset your password.';
  constructor() {}

  ngOnInit(): void {}
}
