import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn = false;
  public userdata = '';

  constructor(public oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {
    this.oidcSecurityService.getAccessToken().subscribe(jwt => console.log(jwt))
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      this.isLoggedIn = isAuthenticated;
      this.userdata = JSON.stringify(userData);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }
}
