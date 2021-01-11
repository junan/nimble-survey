import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  HEADER_SUB_TITLE = 'Enter your email to receive instructions for resetting your password.';

  constructor() {}

  ngOnInit(): void {}
}
