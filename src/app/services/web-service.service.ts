import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  readonly SERVER_URL = `http://localhost:5200`;

  constructor(private http:HttpClient) { }

  get(uri:any):Observable<any>{
    return this.http.get<any>(`${this.SERVER_URL}/${uri}`)
    .pipe(
      catchError((err) => {
        err.error ? alert(err.error) : console.error('error caught in service, '+err);
        return throwError(err);    
      })
    )
  }

  getById(uri:any,id:any):Observable<any>{
    return this.http.get<any>(`${this.SERVER_URL}/${uri}/${id}`)
    .pipe(
      catchError((err) => {
        err.error ? alert(err.error) : console.error('error caught in service, '+err);
        return throwError(err);    
      })
    )
  }

  post(uri:any, payload:object):Observable<any>{
    return this.http.post<any>(`${this.SERVER_URL}/${uri}`,payload)
    .pipe(
      catchError((err) => {
        err.error ? alert(err.error) : console.error('error caught in service, '+err);
        return throwError(err);    
      })
    )
  }

  patch(uri:any, payload:object,id:any):Observable<any>{
    return this.http.patch<any>(`${this.SERVER_URL}/${uri}/${id}`,payload)
    .pipe(
      catchError((err) => {
        err.error ? alert(err.error) : console.error('error caught in service, '+err);
        return throwError(err);    
      })
    )
  }

  delete(uri:any,id:any):Observable<any>{
    return this.http.delete<any>(`${this.SERVER_URL}/${uri}/${id}`)
    .pipe(
      catchError((err) => {
        err.error ? alert(err.error) : console.error('error caught in service, '+err);
        return throwError(err);    
      })
    )
  }

 

}
