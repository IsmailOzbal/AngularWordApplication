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
export class DeleteWordService {

  constructor(private http: HttpClient, private toastr: ToastrService,private error: ErrorService
  ) {}

  deleteWord(id: number): any  {

    const url = `${Global.BaseUri + 'word/deleteword?id='}${id}`;
    alert(url);
    return this.http
      .delete<string>(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +  localStorage.getItem('token')
        }
      })
      .pipe(catchError(this.error.handleError('deleteWord', [])));

  }

}
