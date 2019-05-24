
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User, UserModel } from '../Model/User';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Global } from '../Model/Global';


@Injectable({
  providedIn: 'root'
})
export class InsertUserService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  User: UserModel = new UserModel();
  constructor(private http: HttpClient, private toastrService: ToastrService) {


  }

  AddUser(user: any): Observable<User> {
    this.User.firstname = user.Name;
    this.User.lastname = user.Surname;
    this.User.username = user.Username;
    this.User.password = user.Password;


    return this.http
      .post<User>(Global.BaseUri + 'user/adduser', this.User, this.header)
      .pipe(catchError(this.handleError<User>('AddUser')));
  }

  private log(message: string) {

    this.toastrService.error('Error insert user');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}