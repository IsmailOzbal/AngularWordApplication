import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/shared/services/word.service';
import { MatTableDataSource } from '@angular/material';
import { ExamView } from 'src/app/shared/Model/Exam';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetexamlistService } from 'src/app/shared/services/getexamlist.service';

@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.scss']
})
export class ExamlistComponent implements OnInit {
  ELEMENT_DATA: ExamView[] = [];
  displayedColumns = ['userName', 'score', 'createDate', 'result'];
  dataSource: any;
  status = false;
  constructor(private questionservice: GetexamlistService) {}

  ngOnInit() {

    this.GetData();
  }

  GetData() {
    this.questionservice
      .getExamList()
      .toPromise()
      .then(res => {
        console.log(res);
        this.ELEMENT_DATA = res;
        this.status = true;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
