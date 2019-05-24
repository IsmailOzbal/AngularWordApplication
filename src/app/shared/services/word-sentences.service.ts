import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordSentences } from '../Model/WordSentences';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WordSentencesService {
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  AddWordSentences(sentence: WordSentences): Observable<WordSentences> {

    return this.http
      .post<WordSentences>(Global.BaseUri + 'wordsentences/addsentences', sentence, this.header)
      .pipe(catchError(this.handleError<WordSentences>('AddWordSentences')));
  }

  private log(message: string) {
    this.toastr.error('Error get word sentences');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
