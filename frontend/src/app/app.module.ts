import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {LoginComponent} from './Components/login/login.component';
import {SignupComponent} from './Components/signup/signup.component';
import {ProfileComponent} from './Components/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./Services/auth.service";
import {TokenService} from "./Services/token.service";
import {VerifyauthService} from "./Services/verifyauth.service";
import {AfterLoginService} from "./Services/after-login.service";
import {BeforeLoginService} from "./Services/before-login.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService,
    VerifyauthService,
    AfterLoginService,
    BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
