import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Language } from '../Model/Language';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {

  }

  getLangList(): Observable<Language[]> {
    return this.http.get<Language[]>(Global.BaseUri + 'Language/GetLanguauge', this.header)
    .pipe(catchError(this.handleError('getLangList', [])));
  }

  private log(message: string) {
    this.toastr.error(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
