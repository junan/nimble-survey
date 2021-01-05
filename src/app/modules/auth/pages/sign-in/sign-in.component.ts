import { Component, OnInit } from '@angular/core';
import { generalMessages } from '@shared/general-messages';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  headerSubTitle = generalMessages.SIGN_IN_INSTRUCTION;

  constructor() {}

  ngOnInit(): void {}
}
