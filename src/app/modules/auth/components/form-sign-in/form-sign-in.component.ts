import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})

export class FormSignInComponent implements OnInit {
  signInForm: any;

  constructor() {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    console.log("Submitted value is: ", this.signInForm.value);
    console.log("Submitted email is: ", this.signInForm.value.email);
    console.log("Submitted password is: ", this.signInForm.value.password);
  }
}
