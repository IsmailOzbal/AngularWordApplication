import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Token } from '../Model/Token';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { User, UserModel } from '../Model/User';
import { UserInfoComponent } from 'src/app/layout/user-info/user-info.component';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public currentUserValue: boolean;
  constructor(private http: HttpClient, private toastrService: ToastrService, private error: ErrorService) { }

  Login(user: UserModel): Observable<Token> {

    this.currentUserValue = false;
    return this.http
      .post<Token>(Global.BaseUri + 'login/authenticate', user, this.httpOptions)
      .pipe(catchError(this.error.handleError<Token>('Login')));
  }

  GetUser(userId: string): Observable<User> {


    return this.http
    .get<User>(Global.BaseUri + 'user/getuserbyid', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  localStorage.getItem('token')
      },
      params: {
        'id': userId,
      }
    })
    .pipe(catchError(this.error.handleError<User>('GetUser')));

  }

}
