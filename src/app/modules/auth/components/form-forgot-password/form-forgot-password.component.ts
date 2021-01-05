import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from '@service/forgot-password/forgot-password.service';
@Component({
  selector: 'app-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
})
export class FormForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any;
  alertIcon = 'notification';
  alertTitle = 'Check your email';
  alertMessage = '';

  constructor(private _forgotPasswordService: ForgotPasswordService) {}

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(data: any): void {
    this.alertMessage = '';

    this._forgotPasswordService.forgotPassword(data.email).subscribe(
      (_response) => {
        this.alertMessage =
          'We’ve email you instructions to reset your password.';
      },
      (error) => {
        this.alertMessage = error;
      }
    );
  }
}
