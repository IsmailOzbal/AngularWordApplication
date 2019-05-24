import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordType } from '../Model/WordType';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WordtypeService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  wordtype: WordType = new WordType();
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getWordTypeList(): Observable<WordType[]> {
    return this.http.get<WordType[]>(Global.BaseUri + 'wordtype/getwordtype', this.header)
    .pipe(catchError(this.handleError('getwordtype', [])));
  }

  AddWordType(hero: string): Observable<WordType> {
    this.wordtype.type = hero;
    return this.http
      .post<WordType>(Global.BaseUri + 'wordtype/addwordtype', this.wordtype, this.header)
      .pipe(catchError(this.handleError<WordType>('addWordType')));
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
