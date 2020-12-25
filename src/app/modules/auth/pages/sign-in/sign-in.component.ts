import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  HEADER_SUB_TITLE = 'Sign in to Nimble';

  constructor() {}

  ngOnInit(): void {}
}
