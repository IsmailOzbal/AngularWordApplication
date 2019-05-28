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
export class AddWordService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };
  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {}


  AddWord(word: Words): Observable<Words> {
    return this.http
      .post<Words>(Global.BaseUri + 'word/addword', word , this.header)
      .pipe(catchError(this.error.handleError<Words>('addHero')));
  }

}
