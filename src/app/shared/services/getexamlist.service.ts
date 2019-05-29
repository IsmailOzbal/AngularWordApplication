import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Questions } from '../Model/Questions';
import { Global } from '../Model/Global';
import { Exam, ExamView } from '../Model/Exam';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class GetexamlistService {

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  getExamList(): Observable<ExamView[]> {
    return this.http.get<ExamView[]>(Global.BaseUri + 'exam/getsolveexam', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  Global.getToken()
      },
      params: {
        'Id':  Global.getUser(),
      }
    })
    .pipe(catchError(this.error.handleError('getExamList', [])));
  }

}
