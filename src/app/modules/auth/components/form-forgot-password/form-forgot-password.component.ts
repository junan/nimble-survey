import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from '@service/forgot-password/forgot-password.service';
import { constants } from '@shared/constants';
import { successMessages } from '@shared/success-messages';
import { errorMessages } from '@shared/error-messages';

@Component({
  selector: 'app-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
})
export class FormForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any;
  alertIcon = constants.NOTIFICATION_ICON;
  alertTitle = successMessages.FORGOT_PASSWORD_TITLE;
  alertMessage = '';

  constructor(private _forgotPasswordService: ForgotPasswordService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(data: any): void {
    this._forgotPasswordService.forgotPassword(data.email).subscribe(
      (_response) => {
        this.alertMessage = successMessages.FORGOT_PASSWORD_MESSAGE;
      },
      (error) => {
        this.alertMessage = error;
        this.alertIcon = constants.ERROR_ICON;
        this.alertTitle = errorMessages.ERROR_TITLE;
      }
    );
  }
}
