import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordType } from '../Model/WordType';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';

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
  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {}

  getWordTypeList(): Observable<WordType[]> {
    return this.http.get<WordType[]>(Global.BaseUri + 'wordtype/getwordtype', this.header)
    .pipe(catchError(this.error.handleError('getwordtype', [])));
  }

  AddWordType(type: string): Observable<WordType> {
    this.wordtype.type = type;
    return this.http
      .post<WordType>(Global.BaseUri + 'wordtype/addwordtype', this.wordtype, this.header)
      .pipe(catchError(this.error.handleError<WordType>('addWordType')));
  }

}
