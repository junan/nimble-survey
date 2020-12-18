import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '@authentication';
import {environment} from '@environment';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})

export class FormSignInComponent implements OnInit {
  signInForm: any;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(data: string): void {
    this.authService.signIn(data).subscribe(res => console.log(res));
  }
}
