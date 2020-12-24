import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
})
export class FormForgotPasswordComponent implements OnInit {
  alertIcon = '';
  alertTitle = '';
  alertMessage = '';

  constructor() {}

  ngOnInit(): void {}
}
