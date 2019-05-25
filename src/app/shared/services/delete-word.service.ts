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

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  deleteWord(id: number): any  {

    const url = `${Global.BaseUri + 'word/deleteword?id='}${id}`;
    alert(url);
    return this.http
      .delete<string>(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +  localStorage.getItem('token')
        }
      })
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
