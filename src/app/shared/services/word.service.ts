import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Words } from '../Model/Words';
import { Global } from '../Model/Global';
import { WordView } from '../Model/WordView';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  Global.getToken()
    })
  };


  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {}

  getWordList(): Observable<Words[]> {
    return this.http.get<Words[]>(Global.BaseUri + 'word/getword', this.header).
    pipe(catchError(this.error.handleError('getWordList', [])));
  }


}
