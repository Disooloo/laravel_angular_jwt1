import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../Services/auth.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form = {
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  public error = null;

  constructor(
    private authService:AuthService,
    private tokenService: TokenService,
    private router: Router) { }

  onSubmit(){
    this.authService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data: any) {
    this.tokenService.handle(data.access_token)
    this.router.navigateByUrl('/')
  }

  handleError(error:any){
    this.error = error.error.error;
  }


  ngOnInit(): void {
  }

}
