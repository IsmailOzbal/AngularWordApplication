import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordSentences } from '../Model/WordSentences';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class WordSentencesService {
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  Global.getToken()
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  AddWordSentences(sentence: WordSentences): Observable<WordSentences> {

    return this.http
      .post<WordSentences>(Global.BaseUri + 'wordsentences/addsentences', sentence, this.header)
      .pipe(catchError(this.error.handleError<WordSentences>('AddWordSentences')));
  }


}
