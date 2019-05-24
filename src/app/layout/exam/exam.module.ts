import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QuestionModule  } from '../../shared/modules/question/question.module';
import { ExamlistComponent } from './examlist/examlist.component';

@NgModule({
  declarations: [ExamComponent, ExamlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    MatDialogModule,
    ExamRoutingModule,
    StatModule,
    MatCardModule,
    MatCardModule,
    QuestionModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class ExamModule {}
