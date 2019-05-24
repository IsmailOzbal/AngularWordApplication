import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Token } from '../Model/Token';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  
  constructor(private http: HttpClient, private toastrService: ToastrService) { }

  GetUser(userId: string): Observable<User> {

    const body = new URLSearchParams();
    body.set('Id', userId);

    return this.http
    .post<User>(Global.BaseUri + 'GetUser', body.toString(), this.httpOptions)
    .pipe(catchError(this.handleError<User>('GetUser')));

  }


  private log(message: string) {
    this.toastrService.error('Username or Password is incorrect');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
