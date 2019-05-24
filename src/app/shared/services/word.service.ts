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
export class WordService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };


  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getWordList(): Observable<Words[]> {
    return this.http.get<Words[]>(Global.BaseUri + 'word/getword', this.header).
    pipe(catchError(this.handleError('getWordList', [])));
  }

  private log(message: string) {
    this.toastr.error('Error get word list');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }
}
