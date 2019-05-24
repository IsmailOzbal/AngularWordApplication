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
export class ChartService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getChartData(): Observable<Chart[]> {
    return this.http.get<Chart[]>(Global.BaseUri + 'chart/getchartdata', this.header)
    .pipe(catchError(this.handleError('getChartData', [])));
  }

  private log(message: string) {
   this.toastr.error('Error get chart data');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }

}
