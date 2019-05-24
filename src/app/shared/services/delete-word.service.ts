import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Words } from '../Model/Words';
import { Global } from '../Model/Global';
import { WordView } from '../Model/WordView';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DeleteWordService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  header: any;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  deleteWord(id: number, token: string): any {

    this.header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*',
      })
    };


    return this.http
      .delete<void>(Global.BaseUri + 'DeleteWord/' + id, this.header)
      .pipe(catchError(this.handleError('deleteWord', [])));

  }

  private log(message: string) {
    this.toastr.error('Error delete word');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }
}
