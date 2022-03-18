import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../Services/auth.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";
import {VerifyauthService} from "../../Services/verifyauth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = null;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private verifyauthService: VerifyauthService,
  ) {}

  public form = {
    email: null,
    password: null
  };

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      // console.log(error)
    )
  }

  handleResponse(data: any) {
    this.tokenService.handle(data.access_token)
    this.verifyauthService.changeStatus(true)
    this.router.navigateByUrl('/')
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

  logout(event: MouseEvent){
    event.preventDefault()
  }

  ngOnInit(): void {
  }

}
