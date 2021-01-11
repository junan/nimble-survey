import { Component, OnInit } from '@angular/core';
import { generalMessages } from '@shared/general-messages';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  headerTitle = generalMessages.FORGOT_PASSWORD_INSTRUCTION;

  constructor() {}

  ngOnInit(): void {}
}
