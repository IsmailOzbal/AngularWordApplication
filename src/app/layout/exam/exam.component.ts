import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { Questions } from 'src/app/shared/Model/Questions';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Exam } from 'src/app/shared/Model/Exam';
import { InsertScoreService } from 'src/app/shared/services/insert-score.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  values: string[] = [];
  point: number;
  questionList: Questions[] = [];
  _tagcount = 10;
  sayi: number;
  score: number;
  submit = true;
  reload = false;
  failure = '';
  que = 0;
  control: boolean;
  exam: Exam = new Exam();
  constructor(
    private questionservice: QuestionsService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private insertScore: InsertScoreService
  ) {
    this.point = 100 / this._tagcount;
    this.sayi = 0;
    this.score = 0;
  }

  ngOnInit() {
    this.spinner.show();
    this.getList();
  }

  getList() {
    this.questionservice
      .getQuestionsList()
      .toPromise()
      .then(res => {
        this.questionList = res;
        this.spinner.hide();
      });
  }

  Reload(): void {
    this.spinner.show();
    this.getList();
    this.submit = true;
    this.reload = false;
    this.score = 0;
    this.failure = '';
    this.values = [] = [];
    this.sayi = 0;
  }

  Save(): void {
    this.spinner.show();
    this.que = 0;
    this.control = true;
    for (const que of this.questionList) {
      if (this.values[this.que] === undefined) {
        this.control = false;
        this.spinner.hide();
        break;
      }
      this.que++;
    }
    if (!this.control) {
      this.toastr.warning('All question must be fill', 'Qeustions warning!');
    } else {
      for (const que of this.questionList) {
        if (que.correctanswer === this.values[this.sayi]) {
          this.score = this.score + this.point;
        } else {
          this.failure = this.failure + (this.sayi + 1) + ' answer  is ' + que.correctanswer + '<br/>';
        }
        this.sayi++;
      }

      this.exam.score = this.score;
      this.exam.userId = +localStorage.getItem('userid');

      this.insertScore
        .InsertScore(this.exam)
        .toPromise()
        .then(res => {
          this.spinner.hide();
          swal({
            position: 'top-end',
            type: 'success',
            html: 'The exam result is <b>' + this.score + '</b> points' + '<br/>' + this.failure,
            showConfirmButton: true
          });
          this.submit = false;
          this.reload = true;
        });
    }
  }
}
