import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  headerTitle =
    'Enter your email to receive instructions for resetting your password.';

  constructor() {}

  ngOnInit(): void {}
}
