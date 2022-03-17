import {Component, OnInit} from '@angular/core';
import {VerifyauthService} from "../../Services/verifyauth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../Services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn:any

  constructor(
    private verifyauthService: VerifyauthService,
    private router: Router,
    private Token: TokenService
  ) {
  }

  ngOnInit(): void {
    this.verifyauthService.authStatus.subscribe(value => this.loggedIn = value)
  }

  logout(event: MouseEvent){
    event.preventDefault()
    this.Token.remove()
    this.verifyauthService.changeStatus(false)
    this.router.navigateByUrl('/login')
  }

}
