import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_f1WCXEFLd/.well-known/openid-configuration',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: '78pm4d66i47r9ge9en6dj3pat5',
              scope: 'openid email phone', // 'openid profile offline_access (?) ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
