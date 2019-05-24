import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordDescription } from '../Model/WordDescription';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WordDescriptionService {
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  AddWordDescription(wordDesc: WordDescription): Observable<WordDescription> {

    return this.http
      .post<WordDescription>(Global.BaseUri + 'worddescription/addworddescription', wordDesc, this.header)
      .pipe(catchError(this.handleError<WordDescription>('AddWordDescription')));
  }

  private log(message: string) {
    this.toastr.error('Error get word description');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
