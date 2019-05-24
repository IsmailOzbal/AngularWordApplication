import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import swal from 'sweetalert2';
import { Questions } from '../Model/Questions';
import { Global } from '../Model/Global';
import { Exam, ExamView } from '../Model/Exam';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getQuestionsList(): Observable<Questions[]> {
    return this.http.get<Questions[]>(Global.BaseUri + 'question/getquestions', this.header).
    pipe(catchError(this.handleError('GetQuestion', [])));
  }

  private log(message: string) {
    this.toastr.error('Error get question data.Wordlist must be bigger than 10');

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${error.statusText}`);
      return of(result as T);
    };
  }

}
