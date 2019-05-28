import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Token } from '../Model/Token';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Model/User';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  
  constructor(private http: HttpClient, private toastrService: ToastrService,private error: ErrorService) { }

  GetUser(userId: string): Observable<User> {

    const body = new URLSearchParams();
    body.set('Id', userId);

    return this.http
    .post<User>(Global.BaseUri + 'GetUser', body.toString(), this.httpOptions)
    .pipe(catchError(this.error.handleError<User>('GetUser')));

  }
}
