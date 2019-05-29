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
export class InsertScoreService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  Global.getToken()
    })
  };


  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  InsertScore(exam: Exam): Observable<Exam> {


    return this.http
      .post<Exam>(Global.BaseUri + 'exam/addexam', exam, this.header)
      .pipe(catchError(this.error.handleError<Exam>('InsertScore')));


  }


}
