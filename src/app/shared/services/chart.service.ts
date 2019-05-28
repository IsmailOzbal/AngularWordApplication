import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Global } from '../Model/Global';
import { Chart } from '../Model/Chart';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';

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


  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  getChartData(): Observable<Chart[]> {
    return this.http.get<Chart[]>(Global.BaseUri + 'chart/getchartdata', this.header)
    .pipe(catchError(this.error.handleError('getChartData', [])));
  }

}
