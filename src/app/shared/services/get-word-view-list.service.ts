import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Words } from '../Model/Words';
import { Global } from '../Model/Global';
import { WordView } from '../Model/WordView';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class GetWordViewListService {


  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getWordViewList(count: string): Observable<WordView[]> {
    return this.http.get<WordView[]>(Global.BaseUri + 'wordview/getworddetailview', this.header)
    .pipe(catchError(this.handleError('getWordList', [])));
  }

  private log(message: string) {
    this.toastr.error('Error get word list');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }



}
