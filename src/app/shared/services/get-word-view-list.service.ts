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
export class GetWordViewListService {

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) {}

  getWordViewList(count: string): Observable<WordView[]> {
    return this.http.get<WordView[]>(Global.BaseUri + 'wordview/getworddetailview', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  Global.getToken()
      },
      params: {
        'Id':  Global.getUser(),
      }
    })
    .pipe(catchError(this.error.handleError('getWordList', [])));
  }

}
