import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@service/authentication/authentication.service';
import { SessionService } from '@service/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})

export class FormSignInComponent implements OnInit {
  signInForm: any;

  constructor(
    private _authService: AuthenticationService,
    private _sessionService: SessionService,
    private _router: Router){
  }

  ngOnInit(): void{
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(data: string): void{
    this._authService.signIn(data).subscribe(response => {
      this._sessionService.setAccessToken(response.accessToken);

      this._router.navigate(['/']);
    }, error => {
      console.log("Error:", error);
    });
  }
}
