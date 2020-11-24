import { Component, OnInit } from '@angular/core';
import {ApiService} from './services/api.service';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nimble-survey';


  constructor(private service: ApiService) {
  }

  ngOnInit() { // misspelled
    const data = {
      grant_type: 'password',
      email: 'junan.cs@gmail.com',
      password: '12345678',
    };

    this.service.signIn('api/v1/oauth/token', data).subscribe(res => console.log(res));
    console.log('The component is initialized');
  }
}
