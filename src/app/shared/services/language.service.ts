import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Language } from '../Model/Language';
import { Global } from '../Model/Global';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';

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

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {

  }

  getLangList(): Observable<Language[]> {
    return this.http.get<Language[]>(Global.BaseUri + 'Language/GetLanguauge', this.header)
    .pipe(catchError(this.error.handleError('getLangList', [])));
  }

}
