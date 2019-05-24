import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Global } from '../Model/Global';
import { Chart } from '../Model/Chart';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GetexamService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getExamChartData(): Observable<Chart[]> {
    return this.http.get<Chart[]>(Global.BaseUri + 'chart/getexamscore', this.header)
    .pipe(catchError(this.handleError('getExamChartData', [])));
  }

  private log(message: string) {
   this.toastr.error('Error get exam data.');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }
}
