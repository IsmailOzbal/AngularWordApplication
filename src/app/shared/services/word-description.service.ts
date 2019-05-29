import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { WordDescription } from '../Model/WordDescription';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class WordDescriptionService {
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  Global.getToken()
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {}

  AddWordDescription(wordDesc: WordDescription): Observable<WordDescription> {

    return this.http
      .post<WordDescription>(Global.BaseUri + 'worddescription/addworddescription', wordDesc, this.header)
      .pipe(catchError(this.error.handleError<WordDescription>('AddWordDescription')));
  }


}
