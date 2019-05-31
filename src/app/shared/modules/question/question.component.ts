import { Component, OnInit, Input } from '@angular/core';
import { ExamComponent } from 'src/app/layout/exam/exam.component';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() count: number;
  @Input() tag: string;
  @Input() answerone: string;
  @Input() answertwo: string;
  @Input() answerthree: string;
  @Input() answerfour: string;
  @Input() levelid: number;
  constructor(private examcomponent: ExamComponent) {

  }

  ngOnInit() {}

  Change(ques: string) {
     this.examcomponent.values[this.count - 1] = ques;
  }

  Save(): void {}
}
