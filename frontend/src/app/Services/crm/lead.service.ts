import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Lead} from "../../models/lead";
import {ResponceHttp} from "../../models/responceHttp";

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  getLead(id: number): Observable<Lead> {
    return this.http.get<ResponceHttp>(environment.apiUrl + 'api/leads/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  updateLead(lead: Lead): Observable<Lead> {
    return this.http.put<ResponceHttp>(environment.apiUrl + 'api/leads/' + lead.id, lead).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  storeLead(lead: Lead): Observable<Lead> {
    return this.http.post<ResponceHttp>(environment.apiUrl + 'api/leads', lead).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  constructor(private http: HttpClient) { }

  getLeads(): Observable<Lead[]> {
    return this.http.get<ResponceHttp>(environment.apiUrl + 'api/leads').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }
}
