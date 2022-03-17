import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = null;
  constructor(private http: HttpClient) { }

  public form = {
    email:null,
    password:null
  };

  onSubmit(){
    return this.http.post('http://127.0.0.1:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
        // console.log(error)
    )
  }

  handleError(error:any){
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
