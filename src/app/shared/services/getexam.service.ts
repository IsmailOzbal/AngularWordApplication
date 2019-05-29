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
export class GetexamService {

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  getExamChartData(): Observable<Chart[]> {
    return this.http.get<Chart[]>(Global.BaseUri + 'chart/getexamscore',  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  Global.getToken()
      },
      params: {
        'Id':  Global.getUser(),
      }
    })
    .pipe(catchError(this.error.handleError('getExamChartData', [])));
  }

}
