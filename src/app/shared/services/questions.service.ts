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
export class QuestionsService {

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +  localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService, private error: ErrorService) { }

  getQuestionsList(): Observable<Questions[]> {
    return this.http.get<Questions[]>(Global.BaseUri + 'question/getquestions', this.header).
    pipe(catchError(this.error.handleError('GetQuestion', [])));
  }

}
