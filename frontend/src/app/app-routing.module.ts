import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {SignupComponent} from "./Components/signup/signup.component";
import {ProfileComponent} from "./Components/profile/profile.component";
import {BeforeLoginService} from "./Services/before-login.service";
import {AfterLoginService} from "./Services/after-login.service";
import {LeadFormComponent} from "./Components/crm/lead-form/lead-form.component";
import {LeadsComponent} from "./Components/crm/leads/leads.component";

const routes: Routes = [
  {
    path: '',
    component: LeadsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'form',
    component: LeadFormComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'form/:id',
    component: LeadFormComponent,
    canActivate: [AfterLoginService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
