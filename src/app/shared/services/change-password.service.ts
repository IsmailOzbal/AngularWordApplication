import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Token } from '../Model/Token';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { User, UserModel } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  user: UserModel = new UserModel();
  constructor(private http: HttpClient, private toastrService: ToastrService) { }

  ChangePassword(id: number, password: string): Observable<User> {
    this.user.id = id;
    this.user.password = password;
    return this.http
    .post<User>(Global.BaseUri + 'password/changepassword', this.user, this.header)
    .pipe(catchError(this.handleError<User>('ChangePassword')));

  }

  private log(message: string) {
    this.toastrService.error('Password change error');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
