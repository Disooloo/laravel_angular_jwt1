import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError, map } from "rxjs/operators";
import {Category} from "../../models/category";
import {ResponceHttp} from "../../models/responceHttp";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
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
