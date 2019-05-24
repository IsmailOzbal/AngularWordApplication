import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { MatCardModule,MatRadioModule } from '@angular/material';
import { MatGridListModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MatCardModule, MatGridListModule, MatIconModule,MatRadioModule],
    declarations: [QuestionComponent],
    exports: [QuestionComponent]
})
export class QuestionModule {}
