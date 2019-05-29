import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User, UserModel } from '../Model/User';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Global } from '../Model/Global';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class InsertUserService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private toastrService: ToastrService, private error: ErrorService) {

  }

  AddUser(user: any): Observable<User> {

    return this.http
      .post<User>(Global.BaseUri + 'user/adduser', user, this.header)
      .pipe(catchError(this.error.handleError<User>('AddUser')));
  }

}
