import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Category} from "../../models/category";
import {ResponceHttp} from "../../models/responceHttp";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getStatuses(): Observable<Category[]> {
    return this.http.get<ResponceHttp>(environment.apiUrl + 'api/categories').pipe(
      map((data) => {
        return data.data.items
      }),
      catchError((error)=> {
        return throwError(error)
      })
    )
  }
}
