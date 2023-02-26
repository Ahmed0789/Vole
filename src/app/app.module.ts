import { HttpInterceptorService } from './voleApp/services/http-interceptor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './voleApp/components/dashboard/dashboard.component';
import { HeaderComponent } from './voleApp/components/header/header.component';
import { SideBarComponent } from './voleApp/components/side-bar/side-bar.component';
import { HelpPageComponent } from './voleApp/components/dashboard/help-page/help-page.component';
import { LoginComponent } from './voleApp/components/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { MenuBarComponent } from './voleApp/components/menu-bar/menu-bar.component';
import { LandingPageComponent } from './voleApp/components/landing-page/landing-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

const Ux_Modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatChipsModule,
  MatTooltipModule,
  FormsModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    HelpPageComponent,
    LoginComponent,
    MenuBarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ux_Modules,
    SocialLoginModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [   { provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '221466351861-9037qkgn5pvj90d603ma7srg29a5u12v.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
