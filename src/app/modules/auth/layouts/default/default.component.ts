import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  showBackButton = false;
  headerSubTitle = 'Sign in to Nimble';

  constructor(private _router: Router){
    this.subscribeRouterEvents();
  }

  ngOnInit(): void{
  }

  subscribeRouterEvents = () => {
    this._router.events.subscribe(event => {
        if (event instanceof NavigationEnd && this._router.url === '/auth/forgot-password') {
          this.headerSubTitle = 'Enter your email to receive instructions for resetting your password.';
          this.showBackButton = true;
        } else {
          this.headerSubTitle = 'Sign in to Nimble';
          this.showBackButton = false;
        }
      }
    );
  }
}
